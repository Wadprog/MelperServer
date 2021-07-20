// Custom dependencies
const AppError = require('../errors');
const { catchAsync } = require('../helper');
const Errors = require('../errors/errors');
const Store = require('../database/store');

const resData = require('../Seed/resData');
// const Market = require('../database/market');

module.exports.getAll = catchAsync(async (req, res) => {
  const stores = await Store.find({});
  if (!stores) throw new AppError(Errors.DataNotFound, 404);
  return res.json(stores);
});

module.exports.createOne = catchAsync(async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  return res.json(store);
});

module.exports.addProduct = catchAsync(async (req, res) => {
  const store = await Store.findById(req.params.storeId);
  if (!store) throw new AppError(Errors.DataNotFound, 404);
  store.products.push(req.body);
  await store.save();
  return res.json(store);
});

module.exports.getProducts = catchAsync(async (req, res) => {
  const store = await Store.findById(req.params.storeId);
  if (!store) throw new AppError(Errors.DataNotFound, 404);
  return res.json(store.products);
});
module.exports.test = catchAsync(async (req, res) => res.json(resData));
