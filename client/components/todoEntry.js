angular.module('todo-list')

.controller('TodoEntryCtrl', function() {
  this.deleteAll = () => {
    this.service.deleteCompleted()
    .then((response) => {
      this.refresh();
    })
    .catch((error) => {
      console.error('Error deleting todos!', error);
    });
  };

  this.handleSubmit = () => {
    let todo = {
      todoDescription: this.todoDescription,
      createdOn: new Date().toLocaleString(),
      completed: false
    }
    todosService.addTodo(todo)
    .then((response) => {
      this.todoDescription = '';
      this.refresh();
    })
    .catch((error) => {
      console.error('Error adding todo!', error);
    });
  }
})
.component('todoEntry', {
  bindings: {
    service: '<',
    refresh: '<'
  },
  controller: 'TodoEntryCtrl',
  templateURL: '../templates.todoEntry.html'
});