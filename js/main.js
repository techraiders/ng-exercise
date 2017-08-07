(function() {
  'use strict';
  angular.module('mainModule', ['ui.router'])
    .directive('interactiveBtn', function () {
        return {
            resctrict: 'A',
            link: function (scope, element, attrs) {
                element.on('mouseenter', function () {
                    // console.log(element);
                    element[0].innerText = 'Rolled Over';
                    element.css({
                        backgroundColor: 'blue',
                        color: 'white'
                    });
                });
                element.on('mouseleave', function () {
                    element[0].innerText = 'Rolled out';
                    console.log(element);
                    element.css({
                        backgroundColor: 'yellow',
                        color: 'black'
                    });
                });
            }
        };
    });

})();
