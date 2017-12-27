const model = require('../models');

const todos = {
  get: (req, res) => {
    model.todos.get((err, results) => {
      if (err) {
        console.error('Error retrieving todos', err);
        res.sendStatus(500);
      } else {
        res.status(200).send(results);
      }
    })
  },
  post: (req, res) => {
    let newTodo = req.body;
    let params = [newTodo.todoDescription, newTodo.createdOn, newTodo.completed];
    model.todos.addTodo(params, (err, results) => {
      if (err) {
        console.error('Error adding todo!', err);
      } else {
        res.sendStatus(201);
      }
    });
  },
  put: (req, res) => {
    let params = [req.body.todoId];
    model.todos.update(params, (err, results) => {
      if (err) {
        console.error('Error updating todo!', err);
      } else {
        res.sendStatus(204);
      }
    })
  },
  delete: (req, res) => {
    model.todos.deleteCompleted((err) => {
      if (err) {
        console.err('error deleting todos', err);
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

const login = {
  post: (req, res) => {
    console.log(req.body);
    res.redirect('/');
  }
}

const signup = {
  post: (req, res) => {
    console.log(req.body);
    res.redirect('/');
  }
}

module.exports.users = users;
module.exports.todos = todos;
module.exports.login = login;
module.exports.signup = signup;