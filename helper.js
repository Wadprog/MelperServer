/**
 * All functions too small to be their own module.
 */
// Dependencies.
const helper = {};

helper.catchAsync = (fn) =>
  function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };

helper.capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = helper;
