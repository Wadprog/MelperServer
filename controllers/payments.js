// Custom dependencies
const AppError = require('../errors');
const { catchAsync } = require('../helper');
const Errors = require('../errors/errors');
const Store = require('../database/store');

const resData = require('../Seed/resData');
const secondHand = require('../Seed/secondHand');
const clothes = require('../Seed/clothes');
// const Market = require('../database/market');

module.exports.createOne = catchAsync(async (req, res) => {
  const data = req.body;
  console.log({ data });
  return res.json(data);
});
