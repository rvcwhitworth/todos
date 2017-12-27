angular.module('todo-list')
.controller('TodoListCtrl', function() {
  console.log('here');
})
.component('todoList', {
  bindings: {
    service: '<',
    todos: '<'
  },
  controller: 'TodoListCtrl',
  templateUrl: '../templates/todoList.html'
});