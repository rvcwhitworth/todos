angular.module('todo-list')
.service('todosService', function($http) {
  this.getAll = function() {
    return $http.get('/todos');
  };

  this.deleteCompleted = function() {
    return $http.delete('/todos');
  };

  this.toggleTodo = function(todoId) {
    return $http.put('/todos', JSON.stringify({ todoId: todoId }));
  };

  this.addTodo = function(todo) {
    return $http.post('/todos', JSON.stringify(todo));
  }
});