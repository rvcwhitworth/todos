const model = require('../models');

const todos = {
  get: (req, res) => {
    let params = [req.session.username];
    model.todos.get(params, (err, results) => {
      if (err) {
        console.error('Error retrieving todos for', username);
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    })
  },
  post: (req, res) => {
    let newTodo = req.body;
    let params = [req.session.username, newTodo.todoDescription, newTodo.createdOn, newTodo.completed];
    model.todos.addTodo(params, (err, results) => {
      if (err) {
        console.error('Error adding todo!');
      } else {
        res.sendStatus(201);
      }
    });
  },
  put: (req, res) => {
    let params = [req.body];
    model.todos.update(params, (err, results) => {
      if (err) {
        console.error('Error updating todo!');
      } else {
        res.sendStatus(204);
      }
    })
  },
  delete: (req, res) => {
    model.todos.deleteCompleted((err) => {
      if (err) {
        console.err('error deleting todos');
      } else {
        res.sendStatus(204);
      }
    })
  }
}

const users = {
  post: (req, res) => {

  }
}

module.exports.users = users;
module.exports.todos = todos;