(function () {
  'use strict';
  angular.module('psMovies')
    .component('movieList', {
      templateUrl: '/ps-movies/movie-list.component.html',
      controllerAs: 'vm',
      controller: ['$http', controller]
    });

  function controller ($http) {
    //console.clear();
    var vm = this;
    vm.movies = [];
    vm.$onInit = function () {
      fetchMovies($http)
        .then(function (movies) {
          vm.movies = movies;
        });
    };

    vm.upRating = function (movie) {
      if (movie.rating  < 5) {
        movie.rating += 1;
      }
    };

    vm.downRating  = function (movie) {
      if (movie.rating > 1) {
        movie.rating -= 1;
      }
    };
  }
  function fetchMovies ($http) {
    return $http.get('ps-movies/movies.json')
      .then(function (response) {
        return response.data;
      });
  }
})();

