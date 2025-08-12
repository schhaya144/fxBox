

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/users'); // Replace with your actual User model

const userLoginController = async (req, res) => {
  const { phone, password } = req.body;

  try {
    // Find the user by phone
    const user = await UserModel.findOne({ phone });
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials', success: false });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials', success: false });
    }

    // Save the previous lastLogin time
    const previousLogin = user.lastLogin;

    // Update lastLogin to the current time
    user.lastLogin = new Date();
    await user.save();

    // Generate a JWT token
    const token = jwt.sign(
      { u_id: user.u_id, phone: user.phone },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: '8h' }
    );

    const tokenOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    };

    // Store user details in session
    req.session.user = {
      _id: user._id,
      u_id: user.u_id,
      phone: user.phone,
      name: user.name,
      email: user.email,
      lastLogin: user.lastLogin,
    };

    // Send response with previous login time and session details
    res.cookie('token', token, tokenOptions).json({
      message: 'Login successfully',
      previousLogin: previousLogin || null, // Include the previous login time
      sessionData: req.session.user,
      success: true,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

module.exports = userLoginController;
