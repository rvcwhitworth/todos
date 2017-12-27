angular.module('todo-list')
.component('todoList', {
  bindings: {
    service: '<',
    todoList: '<'
  },
  templateUrl: '../templates/todoList.html'
});