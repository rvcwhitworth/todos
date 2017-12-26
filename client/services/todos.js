angular.module('app')
.service('todosService', function($http) {
  this.getAll = function(callback) {
    $http.get('/todos')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});