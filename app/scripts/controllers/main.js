'use strict';

/**
 * @ngdoc function
 * @name cbAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cbAppApp
 */
angular.module('cbAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
