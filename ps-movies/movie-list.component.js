(function () {
  'use strict';
  angular.module('psMovies')
    .component('movieList', {
      templateUrl: '/ps-movies/movie-list.component.html',
      controllerAs: 'vm',
      controller: ['$http', controller]
    });

  function controller($http) {
    console.clear();
    var vm = this;
    vm.movies = [];
    vm.$onInit = function () {
      fetchMovies($http)
        .then(function (movies) {
          vm.movies = movies;
        });
    };
  }

  function fetchMovies($http) {
    return $http.get('ps-movies/movies.json')
      .then(function (response) {
        return response.data;
      });
  }
})();

