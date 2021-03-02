var { connection } = require("../db/connection");

var connection = connection.getInstance();

module.exports.getAllUserList = function (from, size) {
  return new Promise((resolve, reject) => {
    let query =
      " select u.id as id,u.first_name as firstName, u.last_name as lastName " +
      " from users as u " +
      " limit ?, ? ";

    connection.query(query, [from, size], function (err, rows, fields) {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

module.exports.friendList = function (userId, from, size) {
  return new Promise((resolve, reject) => {
    let query =
      " select f.user_id as id,f.friend_id as friendId, u.first_name as firstName, u.last_name as lastName " +
      " from users as u left join friends as f on u.id = f.friend_id " +
      " where f.user_id = ? limit ?, ? ";

    connection.query(query, [userId, from, size], function (err, rows, fields) {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
