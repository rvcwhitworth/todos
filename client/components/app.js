angular.module('todo-list')
.controller('AppCtrl', function(todosService) {
  this.todosService = todosService;

  this.toggleCompleted = (todoId) => {
    todosService.toggleTodo(todoId)
    .then((response) => {
      this.refreshTodos();
    })
    .catch((error) => {
      console.error('Error toggling todo!', error);
    });
  }

  this.refreshTodos = () => {
    todosService.getAll()
    .then((todos) => {
      this.todoList = todos;
    })
    .catch((error) => {
      console.error('Error retrieving todos from server!', error);
      this.todoList = [];
    });
  }

  this.refreshTodos();
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: '../templates/app.html'
});