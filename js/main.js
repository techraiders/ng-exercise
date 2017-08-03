(function() {
  'use strict';
  angular.module('mainModule', ['ui.router', 'dx'])
    .controller('mainController', [function(){
      var vm = this;
      vm.fruits = [
        { fruit: 'Oranges', total: 10 },
        { fruit: 'Apples', total: 15 },
        { fruit: 'Bananas', total: 9 }
      ];
    }]);
})();
