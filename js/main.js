(function() {
  angular.module('mainModule', ['ui.router'])
    .controller('msg', ['$scope', msg])
    .directive('message', message);

  function msg($scope) {
    $scope.msg = 'This is a message';
  }

  function message() {
    return {
      compile: function(tElement, tAttributes) {
        console.log(tAttributes.text + " -In compile");
        return {
          pre: function(scope, iElement, iAttributes) {
            console.info(iAttributes.text + ' -In Pre');
          },
          post: function(scope, iElement, iAttributes) {
            console.log(iAttributes.text + ' -In Post');
          }
        };
      },
      controller: function($scope, $element, $attrs) {
        console.log($attrs.text + ' -In controller');
      }
    };
  }

})();
