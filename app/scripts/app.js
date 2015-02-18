'use strict';

/**
 * @ngdoc overview
 * @name cbAppApp
 * @description
 * # cbAppApp
 *
 * Main module of the application.
 */
angular
  .module('cbAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'mgcrea.ngStrap'
  ])
  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
    // nested home section state
      .state('home', {
        abstract: true,
        controller: 'AboutCtrl',
        templateUrl: 'views/layout.html',
        data: {
          navItems:
            [
              {
                name: 'Full Width',
                link: 'home.full'
              },
              {
                name: 'Left Sidebar',
                link: 'home.left'
              },
              {
                name: 'Right Sidebar',
                link: 'home.right'
              },
              {
                name: 'More Examples',
                link: 'home.more'
              }
            ]
        }
      })
      .state('home.full', {
        url: '/',
        views: {
          '': {
            templateUrl: 'views/full.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('home.left', {
        url: '/left',
        views: {
          '': {
            templateUrl: 'views/left.html'
          },
          'sidebarLeft': {
            templateUrl: 'views/left.sidebar.html'
          }
        }
      })
      .state('home.right', {
        url: '/right',
        views: {
          '': {
            templateUrl: 'views/right.html',
            controller: 'AboutCtrl'
          },
          'sidebarRight': {
            templateUrl: 'views/right.sidebar.html',
            controller: 'MainSidebarCtrl'
          }
        }
      })
      .state('home.more', {
        url: '/more',
        views: {
          '': {
            templateUrl: 'views/more.html',
            controller: 'AboutCtrl'
          }
        }
      });
  });
