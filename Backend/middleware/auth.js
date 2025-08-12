// const jwt = require("jsonwebtoken");

// async function authToken(req, res, next) {
//   const token =
//     req.cookies?.token || req.headers["authorization"]?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res
//         .status(401)
//         .json({ message: "Session expired, please log in again." });
//     }
//     if (Date.now() / 1000 > decoded.exp - 60 * 5) {
    
//       const newToken = jwt.sign(
//         { u_id: decoded.u_id, phone: decoded.phone },
//         process.env.TOKEN_SECRET_KEY,
//         { expiresIn: "8h" }
//       );
//       res.cookie("token", newToken, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "None",
//       });
      
//     }

//     req.u_id = decoded.u_id;
//     next();
//   });
// }
// module.exports = authToken;




const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  const token = req.cookies?.token || req.headers["authorization"]?.split(" ")[1];
console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Session expired, please log in again." });
    }

    // Check if token is expiring soon and refresh if needed
    if (Date.now() / 1000 > decoded.exp - 60 * 5) {
      const newToken = jwt.sign(
        { u_id: decoded.u_id, phone: decoded.phone },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: "8h" }
      );
      console.log("Decoded Token:", decoded);
      res.cookie("token", newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "None",
      });

      req.newToken = newToken; // Make token available downstream if needed
    }

    req.u_id = decoded.u_id; // Attach user ID to the request
    req.session.user = { u_id: decoded.u_id, phone: decoded.phone }; // Synchronize session
    console.log("Session User:", req.session.user);
    next();
  });
}

module.exports = authToken;