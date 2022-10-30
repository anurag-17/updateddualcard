const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide username"],
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 6,
    select: false,
  },
  avatar: {
    type: String,
    require: [true, "please upload your avatar"]
  },
  challenges: {
    type: Array,
  },
  wonimages:{
    type: Array,
    default:null
  },
  winning:{
    type:Number,
    default:0
  },
  losing:{
   type:Number,
   default:0
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
},{strict:false});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn:"2d",
  });
};

userSchema.methods.getresetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  return resetToken;
};



const user = mongoose.model("nftuser", userSchema);
module.exports = user;


