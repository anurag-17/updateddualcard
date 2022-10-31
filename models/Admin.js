const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken")

const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Provide email"]
    },
    password:{
        type: String,
        required: [true, "provide password"],
        select: false,
    }
})
adminSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn:"2d",
    });
  };

const Admin = mongoose.model("nftadmin", adminSchema);
module.exports = Admin  