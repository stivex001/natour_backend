const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      lowercase: true,
      unique: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    photo: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minlength: 8,
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
