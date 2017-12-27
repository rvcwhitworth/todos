angular.module('todo-list')
.controller('TodoListItemCtrl', function() {
  this.toggleCompleted = () => {
    this.todo.completed = !this.todo.completed;
    this.service.toggleTodo(this.todo.id)
    .catch((error) => {
      console.error('Error toggling completed in database!');
    });
  };
})
.component('todoListItem', {
  bindings: {
    todo: '<',
    service: '<'
  },
  controller: 'TodoListItemCtrl',
  templateUrl: '../templates/todoListItem.html'
})