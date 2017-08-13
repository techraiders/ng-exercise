(function() {
  'use strict';
  angular.module('mainModule', ['ui.router'])
    .controller('DemoController', function () {
      this.date = new Date();
    });

})();
