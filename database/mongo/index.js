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

const addUser = (user, encryptedPass, callback) => {
  User.create({
    username: user,
    pass: encryptedPass
  }, callback);
};

const userExists = (user, callback) => {
  User.find({username: user}, (err, users) => {
    if (err) {
      console.error('Error searching for user!');
      callback(err, null);
    } else {
      callback(null, users.length !== 0);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.addUser = addUser;
module.exports.userExists = userExists;