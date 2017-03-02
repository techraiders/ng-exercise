(function () {
  'use strict';
  angular.module('psMovies')
    .component('movieList', {
      templateUrl: '/ps-movies/movie-list.component.html',
      controllerAs: 'vm',
      controller: controller
    });

  function controller() {
    var vm = this;
    vm.message = 'Hello from a component controller';
    vm.changeMessage = function () {
      vm.message = 'new changed messge';
    };
  }
})();

