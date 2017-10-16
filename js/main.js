(function () {
  var app = angular.module('mainModule', []);
  app.provider('books', function  () {
      this.$get = function  () {
        var appName = 'Book Logger';
        var appDesc = 'Track which books you read.';

        return {
          appName: appName,
          appDesc: appDesc
        };
      };
    });

  app.controller('BooksController', function (books) {
    var vm = this;
    vm.appName = books.appName;
  });
} () );