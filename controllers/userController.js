const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

const filterObj = (obj, ...allowedField) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedField.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateProfile = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, "name", "email");
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 200,
    data: {
      user: updatedUser,
    },
  });
});
