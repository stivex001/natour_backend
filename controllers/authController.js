const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    confirmPassword,
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
