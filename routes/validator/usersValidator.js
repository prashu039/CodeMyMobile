module.exports = function (req, res, next) {
  var regx = /^\d+$/;

  req.query.limit = regx.test(req.query.limit) ? parseInt(req.query.limit) : 10;
  req.query.offset = regx.test(req.query.offset)
    ? parseInt(req.query.offset)
    : 0;
  next();
};
