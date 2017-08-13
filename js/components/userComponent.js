(function () {
  'use strict';

  var app = angular.module('app');

  app.component('userInfo', {
    // Binds caption to the parent scope
    bindings: {
      name: '<'
    },
    // Loads the component template
    templateUrl: '/js/components/userComponent.html',
    controller: function () {
      // The list of users we will be displaying
      this.records = [{
        name: "Alfreds Futterkiste",
        city: "Berlin",
        Country: "Germany"
      }, {
        name: "Ana Trujillo Emparedados y helados",
        city: "México D.F.",
        country: "Mexico"
      }, {
        name: "Blondel père et fils",
        city: "Strasbourg",
        country: "France"
      }, {
        name: "Bólido Comidas preparadas",
        city: "Madrid",
        country: "Spain"
      }];
    }
  });
})();
