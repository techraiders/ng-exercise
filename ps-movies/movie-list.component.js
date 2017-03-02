(function() {
  'use strict';
  angular.module('psMovies')
    .component('movieList', {
      templateUrl: '/ps-movies/movie-list.component.html',
      controller: function () {
        this.message = 'Hello from a component controller';
      }
    });
})();
