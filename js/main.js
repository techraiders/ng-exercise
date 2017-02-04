(function () {
  angular.module('mainModule', ['ui.router','submodule'])
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider
      .state('state1', {
        url: '/state1',
        controller: 'paramCtrl as p',
        template: '<h2> {{p.msg}} This is state 1. </h2> Go to <button ui-sref="state1.1"> state 1.1 </button> <br/> <ui-view></ui-view>'
      })
      .state('state1.1', {
        url: '/state1.1',
        controller: 'submoduleCtrl as vm',
        template: ' {{p.msg}} {{vm.Name}}, This is state 1.1'
      })
      .state('state2', {
        url: '/state2',
        template: '<h2>This is state 2</h2>'
      });
  }])
  .controller('paramCtrl', ['$state', function($state){
    this.goToState = function(stateName) {
      $state.go(stateName);
    };
      this.msg = 'hello';
  }]);
})();

(function() {
  angular.module('submodule', []).controller('submoduleCtrl', function(){
    this.Name = 'NAVNEET';
  });
})();