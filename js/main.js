(function() {
  'use strict';
  angular.module('mainModule', ['ui.router', 'dx'])
    .controller('mainController', [Controller]);

  var states = [{
      name: 'Delhi',
      area: 30
    }, {
      name: 'Uttar Pradesh',
      area: 30
    }, {
      name: 'Madhya Pradesh',
      area: 60
    }];

  var countries = [{
    name: "Russia",
    area: 12
  }, {
    name: "Canada",
    area: 17
  }, {
    name: "USA",
    area: 7
  }, {
    name: "China",
    area: 7
  }, {
    name: "Brazil",
    area: 6
  }, {
    name: "Australia",
    area: 5
  }, {
    name: "India",
    area: 2
  }, {
    name: "Others",
    area: 55
  }];

  var dataSource = [states, countries];

  function Controller() {
    var vm = this;

    vm.pieChart = {
      size: {
        width: 500 // size of chart
      },
      palette: "bright",
      dataSource: dataSource[0], // countries are array of object.
      series: [{
        argumentField: 'name',
        valueField: "area", // valueField is the key in dataSource objects whoose value affects size of pie sectors 
        label: {
          visible: true, // setting true here shows value of sectors
          connector: {
            visible: true, // shows line connecting label to its sector
            width: 1 // width of connecting line
          }
        }
      }],
      title: "Area of Countries",
      "export": {
        enabled: true // if enabled, shows burger icon which enables to download pieChart
      },
      onPointClick: function(e) {
        var point = e.target;
        toggleVisibility(point);
      },
      onLegendClick: function(e) {
        var arg = e.target;
        toggleVisibility(this.getAllSeries()[0].getPointsByArg(arg)[0]);
      }
    };
  }

  function toggleVisibility(item) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }

})();
