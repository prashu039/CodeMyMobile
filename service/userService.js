var userDao = require("../persistance/userDao");

module.exports.getAllUserList = function (from, size) {
  return new Promise((resolve, reject) => {
    userDao
      .getAllUserList(from, size)
      .then((userList) => {
        resolve(userList);
      })
      .catch((err) => {
        console.log("error" + err);
        reject(err);
      });
  });
};

module.exports.friendList = function (userId, from, size) {
  return new Promise((resolve, reject) => {
    userDao
      .friendList(userId, from, size)
      .then((friends) => {
        resolve(friends);
      })
      .catch((err) => {
        console.log("error" + err);
        reject(err);
      });
  });
};
