const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ryan',
  password : 'ryan',
  database : 'todoList'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;