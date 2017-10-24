(function () {
  var app = angular.module('mainModule', ['ngCookies']);
  
  app.controller('BooksController', function ($cookies, $cookieStore) {
    var vm = this;
    
    vm.setAsFavorite = function (currentBook) {
      $cookies.put('favoriteBook', currentBook);
      console.log($cookies.get('favoriteBook'));
    };

    
  });
} () );