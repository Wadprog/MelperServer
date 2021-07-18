// Custom dependencies
const AppError = require('../errors');
const { catchAsync } = require('../helper');
const Errors = require('../errors/errors');
const Market = require('../database/market');

module.exports.getAll = catchAsync(async (req, res) => {
  const allMarkets = await Market.find({});
  if (!allMarkets) throw new AppError(Errors.DataNotFound);
  return res.json(allMarkets);
});

module.exports.addStore = catchAsync(async (req, res) => {
  const allMarkets = await Market.find({});
  if (!allMarkets) throw new AppError(Errors.DataNotFound);
  return res.json(allMarkets);
});