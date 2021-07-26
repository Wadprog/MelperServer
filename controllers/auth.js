/*
Authentication controllers
*/
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Custom dependencies
const AppError = require('../errors');
const Errors = require('../errors/errors');
const User = require('../database/user');
const { catchAsync } = require('../helper');
const { JWT_SECRET } = require('../config');

module.exports.login = catchAsync(async (req, res) => {
  console.log(req.body.email);
  const { email, pin } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new AppError(Errors.InvalidCredentials, 400);

  const isMatch = await bcrypt.compare(pin, user.pin);
  if (!isMatch) throw new AppError(Errors.InvalidCredentials, 400);

  delete user.pin;

  jwt.sign({ user }, JWT_SECRET, {}, (err, token) => {
    if (err) throw new AppError(Errors.TokenCreationFailed);
    return res.json({ token });
  });
});
