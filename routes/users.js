var express = require("express");
const { userList } = require("../persistance/userDao");
var router = express.Router();
var userService = require("../service/userService");
var validator = require("./validator/usersValidator");

router.get("/userList", validator, function (req, res, next) {
  limit = req.query.limit;
  offset = req.query.offset;
  userService
    .getAllUserList(offset, limit)
    .then((userList) => {
      res.type("application/json");
      res.status = 200;
      res.send(userList);
    })
    .catch((err) => {
      res.status = 500;
      let error = {
        errors: "Something Went Wrong Please retry",
      };
      res.send(error);
    });
});

router.get("/friends/:userId", validator, function (req, res, next) {
  let user = req.params.userId;
  limit = req.query.limit;
  offset = req.query.offset;
  userService
    .friendList(user, offset, limit)
    .then((userList) => {
      res.type("application/json");
      res.status(200);
      res.send(userList);
    })
    .catch((err) => {
      res.status(500);
      let error = {
        message: "Something Went Wrong Please retry",
      };
      res.send(error);
    });
});

module.exports = router;
