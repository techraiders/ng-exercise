(function() {
  'use strict';
  angular.module('psMovies')
    .component('movieList', {
      templateUrl: '/ps-movies/movie-list.component.html',
      controllerAs: 'vm',
      controller: function () {
        var vm = this;
        vm.message = 'Hello from a component controller';
      }
    });
})();
