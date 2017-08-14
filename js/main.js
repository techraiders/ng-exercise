(function() {
  'use strict';
  var app = angular.module('app', []);

  app.component('parentComponent', {
    transclude: true,
    template: `
      <div ng-transclude></div>
    `,
    controller: function () {
      this.foo = function () {
        return 'Foo from parent!';
      };
    }
  });

  app.component('childComponent', {
    bindings: {
      count: '='
    },
    require: {
      parent: '^parentComponent'
    },
    controller: function () {
      this.state = 'Not loaded';
      this.$onInit = function () {
        this.state = this.parent.foo();
      };
    },
    template: `
      <div>
        component: {{$ctrl.state}}
      </div>
    `
  });

})();
