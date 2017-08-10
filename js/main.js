(function() {
  'use strict';
  angular.module('mainModule', ['ui.router', 'dx'])
    .controller('mainController', [Controller]);

    function Controller() {
      var vm = this;

      vm.textBox = {
        simple: {
          value: 'John Smith'
        },
        withPlaceholder: {
          value: 'Enter full name here...'
        },
        withClearButton: {
          value: 'John Smith',
          showClearButton: true
        },
        passwordMode: {
          mode: 'password',
          placeholder: 'Enter password',
          showClearButton: true,
          value: 'kjdf57sjh'
        },
        maskUsage: {
            mask: "+1 (X00) 000-0000",
            maskRules: {"X": /[02-9]/}
        },
        disabled: {
            value: "John Smith",
            disabled: true
        },
        fullName: {
            value: "Smith",
            showClearButton: true,
            placeholder: "Enter full name",
            valueChangeEvent: "keyup",
            onValueChanged: function(data) {
              console.log(data);
                vm.emailValue = data.value.replace(/\s/g, "").toLowerCase() + "@corp.com";
            }
        },
        email: {
            readOnly: true,
            hoverStateEnabled: false,
            bindingOptions: {
                value: "vm.emailValue"
            }
        }
      };
    }
})();
