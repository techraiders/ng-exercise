(function() {
  'use strict';
  var app = angular.module('app', []);

  app.component('parentComponent', {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `
  });

  app.component('childComponent', {
    bindings: {
      count: '='
    },
    controller: function () {
      this.state = 'Not loaded';
      this.$onInit = function () {
        this.state = 'Loaded!';
      };
    },
    template: `
      <div>
        component: {{$ctrl.state}}
      </div>
    `
  });

})();
