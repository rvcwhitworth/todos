//const mongo = require('../../database/mongo');
const sql = require('../../database/mysql');

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
    mongo.addUser(username, encryptedPass, (error, user) => {
      if (error) {
        console.error('Error when adding user');
      } else {
        cb(user);
      }
    })
  },
  userExists: (username, cb) => {
    mongo.userExists(username, (err, exists) => {
      if (err) {
        console.error('Error when checking if user exists');
        cb(err, null);
      } else {
        cb(null, exists);
      }
    });
  }
}

module.exports.todos = todos;
module.exports.users = users;