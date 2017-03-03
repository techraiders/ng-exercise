(function() {
  'use strict';
  angular.module('psMovies', ["ngRoute"])
    .component('appAbout', {
      template: 'This is the about page'
    })
    .config(['$routeProvider', routeProvider]);

    function routeProvider ($routeProvider) {
      $routeProvider
        .when("/list", {
          template: "<movie-list></movie-list>"
        })
        .when("/about",{
          template: "<app-about></app-about>"
        })
        .otherwise({redirectTo: "/list"});
    }
})();

