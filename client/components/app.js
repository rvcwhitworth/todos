angular.module('todo-list')
.controller('AppCtrl', function(todosService) {
  this.todosService = todosService;
  
  this.refreshTodos = () => {
    this.todosService.getAll()
    .then((response) => {
      this.todoList = response.data;
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