(function() {
  angular.module('mainModule', ['ui.router'])
    .controller('msgCtrl', function($scope) {

    })
    .directive('message1', function() {
      return {
        templateUrl: 'msg1.html',
        transclude: true,
      };
    });


})();
