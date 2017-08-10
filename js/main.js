(function() {
  'use strict';
  angular.module('mainModule', ['ui.router', 'dx'])
    .controller('mainController', [Controller]);

  function Controller() {
    var vm = this;

    vm.maxLength = null;
    vm.value = longText;

    vm.textAreaWithMaxLength = {
      height: 90,
      bindingOptions: {
        maxLength: "vm.maxLength",
        value: "vm.value"
      }
    };

    vm.checkBoxOptions = {
      value: false,
      onValueChanged: function(data) {
        if (data.value) {
          vm.value = longText.substring(0, 100);
          vm.maxLength = 100;
        } else {
          vm.value = longText;
          vm.maxLength = null;
        }
      },
      text: "Limit text length"
    };

    var valueChangeEvents = [{
        title: "On Blur",
        name: "change"
    }, {
        title: "On Key Up",
        name: "keyup"
    }];

    vm.eventValue = valueChangeEvents[0].name;
    vm.valueForEditableTextArea = longText;

    vm.selectBoxOptions = {
        items: valueChangeEvents,
        valueExpr: "name",
        displayExpr: "title",
        bindingOptions: {
            value: "vm.eventValue"
        }
    };

    vm.editableTextArea = {
      height: 90,
      bindingOptions: {
        value: "vm.valueForEditableTextArea",
        valueChangeEvent: "vm.eventValue"
      }
    };

    vm.disabledTextArea = {
      height: 90,
      readOnly: true,
      bindingOptions: {
        value: "vm.valueForEditableTextArea"
      }
    };
  }
})();
