angular.module('todo-list')
// TODO NEXT: ENTRY
.controller('AppCtrl', function(todosService) {
  this.todosService = todosService;

  this.deleteAll = () => {
    todosService.deleteCompleted()
    .then((response) => {
      this.getTodos();
    })
    .catch((error) => {
      console.error('Error deleting todos!', error);
    });
  }

  this.handleSubmit = (todoDescription) => {
    let todo = {
      todoDescription: todoDescription,
      createdOn: new Date().toLocaleString(),
      completed: false
    }
    todosService.addTodo(todo)
    .then((response) => {
      this.getTodos();
    })
    .catch((error) => {
      console.error('Error adding todo!', error);
    });
  }

  this.toggleCompleted = (todoId) => {
    todosService.toggleTodo(todoId)
    .then((response) => {
      this.getTodos();
    })
    .catch((error) => {
      console.error('Error toggling todo!', error);
    });
  }

  this.getTodos = () => {
    todosService.getAll()
    .then((todos) => {
      this.todoList = todos;
    })
    .catch((error) => {
      console.error('Error retrieving todos from server!', error);
      this.todoList = [];
    });
  }

  this.getTodos();
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: '../templates/app.html'
});