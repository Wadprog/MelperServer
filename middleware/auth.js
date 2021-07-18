const jwt = require('jsonwebtoken');

// Custom dependencies
const AppError = require('../errors');
const Errors = require('../errors/errors');
const { JWT_SECRET, EXPECTED_TOKEN_HEADER } = require('../config');

module.exports = function (req, res, next) {
  const token = req.header(EXPECTED_TOKEN_HEADER);
  if (!token) throw new AppError(Errors.NotAuthorized, 401);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    throw new AppError(Errors.TokenDecodeFailed);
  }
};
