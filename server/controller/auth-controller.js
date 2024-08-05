const User = require("../models/user-modles");
const bcrypt = require("bcrypt");

//Home
const home = async (req, res) => {
  try {
    res.send("Welcome to the home");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
};

//Registration
const reg = async (req, res) => {
  try {
    const { username, password, phone, email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email Already Exist." });
    }
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, saltRound);
    const newUser = new User({
      username,
      password: hashPassword,
      phone,
      email,
    });
    await newUser.save();

    res.status(200).json({
      user: { username, password: hashPassword, email, phone },
      token: await newUser.generateToken(),
      userId: newUser._id.toString(),
    });
    console.log(req.body);
  } catch (error) {
    // res.status(500).send("An error occurred");
    next(error);
  }
};

//Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailExsist = await User.findOne({ email });

    if (!emailExsist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const loginUser = await bcrypt.compare(password, emailExsist.password);

    if (loginUser) {
      res.status(200).json({
        user: { message: "Login Successfully" },
        token: await emailExsist.generateToken(),
        userId: emailExsist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
      next(error);
    }
  } catch (error) {
      console.log("error");
  }
};


const user = async (req, res) => {
  try {
    const data = req.user;
    console.log(data);
    return res.status(200).json({data})

  } catch (error) {
    console.log(`Error from getting data ${error}`);
  }
}


module.exports = { home, reg, login,user };
