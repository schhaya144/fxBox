const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminUsername = 'admin';
const adminPassword = 'Password123';

const adminLogin = async (req, res) => {
  console.log('first');
  const { username, password } = req.body;
  console.log(req.body);

  if (username === adminUsername && password === adminPassword) {
    return res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid credentials' });
  }
};

module.exports = { adminLogin };
