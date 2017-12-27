const User = require('../../database/mongo');
const sql = require('../../database/mysql');
const bcrypt = require('bcrypt-nodejs');

const todos = {
  get: (cb) => {
    const queryString = `SELECT * FROM todos;`
    sql.query(queryString, (err, results) => {
      cb(err, results);
    });
  },
  update: (params, cb) => {
    const queryString = `UPDATE todos SET completed = NOT completed WHERE id = ?;`
    sql.query(queryString, params, (err, results) => {
      cb(err, results);
    });
  },
  deleteCompleted: (params, cb) => {
    const queryString = `DELETE FROM todos WHERE completed = 1;`
    sql.query(queryString, params, (err, results) => {
      cb(err, results);
    });
  },
  addTodo: (params, cb) => {
    const queryString = `INSERT INTO todos (todoDescription, createdOn, completed)
                       VALUES (?, ?, ?);`
    sql.query(queryString, params, (err, results) => {
      cb(err, results);
    });
  }
}

const users = {
  addUser: (username, encryptedPass, cb) => {
    User.create({
      username: user,
      pass: encryptedPass
    }, callback);
  },
  userExists: (username, cb) => {
    User.find({username: user}, (err, users) => {
      if (err) {
        console.error('Error searching for user!');
        callback(err, null);
      } else {
        callback(null, users.length !== 0);
      }
    });
  }
}

module.exports.todos = todos;
module.exports.users = users;