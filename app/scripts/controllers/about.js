'use strict';

/**
 * @ngdoc function
 * @name cbAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cbAppApp
 */
angular.module('cbAppApp')
  .controller('AboutCtrl', function ($scope, $popover) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.foo = {bar:'bar'};

    var popover = null;

    $scope.showPopover = function(template, e){
      e.stopPropagation();

      var popoverOptions = {
        contentTemplate: template,
        placement: 'auto bottom-left',
        animation: 'am-fade',
        'container': 'body',
        'autoClose': '1',
        trigger: 'manual'
      };
      if(!popover){
        popover = $popover(angular.element(e.target), popoverOptions);

        popover.$scope = $scope;
        popover.$promise.then(popover.show);
      } else {
        popover.$scope = $scope;
        popover.$promise.then(popover.hide());
        popover = null;
      }
    };
  });
