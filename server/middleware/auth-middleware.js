const jwt = require("jsonwebtoken");
const User = require("../models/user-modles");

const authMiddleWare = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "Not valid token" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  // console.log("Token from middleware", jwtToken);

  try {
    const verify = jwt.verify(jwtToken, process.env.JWT_SEC_KEY);
    const data = await User.findOne({ email: verify.email }).select({ password: 0 });
    console.log(data);
    req.user = data;
    req.token = token;
    req.userid = data._id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Not valid token" });
  }
};

module.exports = authMiddleWare;
