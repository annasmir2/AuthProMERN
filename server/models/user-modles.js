const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//json web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      //define secert key to mem by server
      process.env.JWT_SEC_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log("Error in token");
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;












//Before saving data call this function
// userSchema.pre("save",async function(next){
// const user=this;

// if(!user.isModified("password")){
//     next();
// }npm
// try {
//        const saltRound = await bcrypt.genSalt(10);
//      const hashPassword = await bcrypt.hash(user.password, saltRound);
//      user.password=hashPassword;

// } catch (error) {
//     next(error);
// }
// })