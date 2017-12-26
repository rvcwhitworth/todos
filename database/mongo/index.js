const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoList');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  username: String,
  pass: String
});

const User = mongoose.model('User', userSchema);

const selectAll = (callback) => {
  User.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;