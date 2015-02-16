'use strict';

/**
 * @ngdoc function
 * @name cbAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cbAppApp
 */
angular.module('cbAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
