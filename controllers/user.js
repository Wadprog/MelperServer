const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Custom dependencies
const AppError = require('../errors');
const User = require('../database/user');
const { catchAsync } = require('../helper');
const Errors = require('../errors/errors');
const { JWT_SECRET } = require('../config');

module.exports.createOne = catchAsync(async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (user) throw new AppError(Errors.TakenUserName, 401);

  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.pin = await bcrypt.hash(user.pin, salt);
  await user.save();

  jwt.sign({ user }, JWT_SECRET, null, (err, token) => {
    if (err) throw new AppError(Errors.TokenCreationFailed);
    return res.json({ token });
  });
});

module.exports.getOne= catchAsync(async (req, res) => {
  res.render('projects/project-detail', {
    customer: {},
    allCustomers: [],
    title: 'CRM | All customers ',
    headerTitle: 'Customers List',
  });
});
module.exports.editOne = catchAsync(async (req, res) => {
  res.render('projects/project-edit', {
    customer: {},
    allCustomers: [],
    title: 'CRM | All customers ',
    headerTitle: 'Customers List',
  });
});
