const bcrypt = require('bcryptjs');
const UserModel = require("../models/users");
const { sendOtpEmail, sendWelcomeEmail  } = require("../utils/sendEmail");



exports.sentEmailOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    let user = await UserModel.findOne({ email });

    if (!user) {
      const latestUser = await UserModel.findOne({}, {}, { sort: { u_id: -1 } });
      const newUserId = latestUser ? latestUser.u_id + 1 : 6000010;

      user = new UserModel({
        email,
        u_id: newUserId,
        otp,
        otpExpiresAt,
      });
    } else {
      user.otp = otp;
      user.otpExpiresAt = otpExpiresAt;
    }

    await user.save();
    await sendOtpEmail(email, otp);

    res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send OTP", error: err.message });
  }
};

exports.verifyEmailOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user || user.otp !== Number(otp)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiresAt < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    user.isEmailVerified = true;
    user.otp = null;
    user.otpExpiresAt = null;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (err) {
    res.status(500).json({ message: "OTP verification failed", error: err.message });
  }
};


exports.userRegisterationController = async (req, res) => {
  try {
    const { name, phone, password, privacyAgreement, inviteCode, role, email } = req.body;

    if (!phone || !password || !privacyAgreement || !inviteCode || !email) {
      throw new Error("Please provide all required fields.");
    }

    const existingUser = await UserModel.findOne({ phone });
    if (existingUser?.password) {
      throw new Error("User already exists with this phone number.");
    }

    const user = await UserModel.findOne({ email });

    if (!user || !user.isEmailVerified) {
      return res.status(400).json({ message: "Please verify your email before registration" });
    }

    const parentUser = await UserModel.findOne({ referralCode: inviteCode });
    if (!parentUser) {
      return res.status(400).json({ message: "Invalid referral code" });
    }

    const referralCode = `INVST${user.u_id}`;
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    user.name = name;
    user.phone = phone;
    user.password = hashPassword;
    user.privacyAgreement = privacyAgreement;
    user.inviteCode = inviteCode;
    user.role = role;
    user.referralCode = referralCode;
    user.p_id = parentUser?.u_id || null;

    await user.save();

    await sendWelcomeEmail(user.email, user.name);

    return res.status(201).json({
      data: user,
      success: true,
      message: "User registered successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message || "An error occurred",
      success: false,
    });
  }
};




// exports.userRegisterationController = async (req, res) => {
//   try {
//     const { name, phone, password, privacyAgreement, inviteCode, role } = req.body;

//     let parentUser = null;
//     if (inviteCode) {  // Use inviteCode instead of referralCode
//       parentUser = await UserModel.findOne({ referralCode: inviteCode });
//       if (!parentUser) {
//         return res.status(400).json({ message: "Invalid referral code" });
//       }
//     }

//     // Check if required fields are provided
//     if (!phone || !password || !privacyAgreement || !inviteCode) {
//       throw new Error("Please provide all required fields.");
//     }

//     // Check if the user already exists
//     const existingUser = await UserModel.findOne({ phone });
//     if (existingUser) {
//       throw new Error("User already exists with this phone number.");
//     }

//     const latestUser = await UserModel.findOne().sort({ u_id: -1 });
//     const newUserId = latestUser ? latestUser.u_id + 1 : 500;

//     // Generate the referral code after getting the newUserId
//     const staticPrefix = "INVST";
//     const referralCode = `${staticPrefix}${newUserId}`;

//     const salt = bcrypt.genSaltSync(10);
//     const hashPassword = await bcrypt.hash(password, salt);

//     // Prepare new user data
//     const newUser = new UserModel({
//       name,
//       phone,
//       password: hashPassword,
//       privacyAgreement,
//       inviteCode,
//       u_id: newUserId,
//       role,
//       referralCode: referralCode || '',
//       p_id: parentUser ? parentUser.u_id : null,  // Store parent ID if referral code is valid
//     });

//     // Save new user to the database
//     const savedUser = await newUser.save();
// await sendWelcomeEmail(savedUser.email, savedUser.name);
//     return res.status(201).json({
//       data: savedUser,
//       success: true,
//       message: "User created successfully!",
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: err.message || "An error occurred",
//       success: false,
//     });
//   }
// };



// get all the data







exports.getAllUsersController = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;

  try {
    // Find the user by ID and update the fields
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { ...updates, lastLogin: updates.lastLogin || Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        error: true,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.error("Error updating user:", err.message);
    return res.status(500).json({
      success: false,
      error: true,
      message: err.message || "Internal Server Error",
    });
  }
};




