const UserModel = require('../models/users');

exports.getCurrentUser = async(req, res) =>{
    try {
      console.log("userId iiii", req.u_id);
      const currentUser = await UserModel.findOne({ u_id: req.u_id });
      console.log("user details",currentUser);
      
      return res.status(200).json({
        data: currentUser,
        error: false,
        success: true,
        message: "user details",
      });
      
    } catch (err) {
      res.status(400).json({
        message: err.message || err,
        error: true,
        success: false,
      });
    }
  }
