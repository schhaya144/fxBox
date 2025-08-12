const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
  user: 'vaidyaankur744@gmail.com',
    pass: 'rmrdnldsupzmdfjk',
  },
});

async function sendOtpEmail(email, otp) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Registration",
    text: `Your OTP for registration is: ${otp}. It is valid for 10 minutes.`,
  };

  return transporter.sendMail(mailOptions);
}

async function sendWelcomeEmail(email, name) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to FXBox!",
    text: `Hi ${name},\n\nWelcome to FXBot! Your registration is successful.\n\nRegards,\nTeam FXBox`,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendOtpEmail, sendWelcomeEmail };
