const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ryan',
  password : 'ryan',
  database : 'todoList'
});

module.exports = connection;