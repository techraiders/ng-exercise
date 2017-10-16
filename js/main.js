(function () {
  var app = angular.module('mainModule', []);
  app.provider('books', function () {
      this.$get = function () {
        var appName = 'Book Logger';
        var appDesc = 'Track which books you read.';

        var version = '1.0';

        if (includeVersionInTitle) {
          appName += ' ' + version;
        };

        return {
          appName: appName,
          appDesc: appDesc
        };
      };

      var includeVersionInTitle = false;
      this.setIncludeVersionInTitle = function (value) {
        includeVersionInTitle = value;
      };

    });

  app.config(function  (booksProvider) {
    booksProvider.setIncludeVersionInTitle(true);
  });

  app.controller('BooksController', function (books) {
    var vm = this;
    vm.appName = books.appName;
  });
} () );