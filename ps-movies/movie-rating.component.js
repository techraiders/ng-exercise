(function () {
  'use strict';
  angular.module('psMovies')
    .component('movieRating', {
      templateUrl: 'ps-movies/movie-rating.component.html',
      bindings: {
        foo: '<'
      },
      transclude: true,
      controllerAs: 'vm',
      controller: function () {
        var vm = this;
        vm.$onInit = function () {
          vm.entries = new Array(vm.foo);
        };
        vm.$onChanges = function () {
          vm.entries = new Array(vm.foo);
        };
      }
    });
})();