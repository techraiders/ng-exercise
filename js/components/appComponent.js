(function () {
  'use strict';
  var app = angular.module('app');

  app.component('menuBar', {
    // defines a two way binding in and out of the component
    bindings: {
      brand: '<'
    },
    // loads the template
    templateUrl: 'js/components/appComponent.html',
    controller: function () {
      var vm = this;
      vm.menu = [{
        name: 'Home',
        component: 'home'
      }, {
        name: 'About',
        component: 'about'
      }, {
        name: 'Contact',
        component: 'contact'
      }];
    }
  });

}) ();
