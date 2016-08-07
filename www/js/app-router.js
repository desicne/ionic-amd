'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide', '$ionicConfigProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider, $provide, $ionicConfigProvider) {

    $ionicConfigProvider.backButton.text('').icon('icon-back-cathod').previousTitleText(false);
    $ionicConfigProvider.views.maxCache(4);
    $ionicConfigProvider.views.forwardCache(0);
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');

    $stateProvider
      .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'base/tabs.html',
        controller: 'TabsController'
      })

      .state('tabs.feed', {
        url: '/feed',
        views: {
          'feed': {
            templateUrl: 'feed/feed.html',
            controller: 'FeedController'
          }
        }
      })

      .state('tabs.profile', {
        url: '/profile',
        views: {
          'profile': {
            templateUrl: 'profile/profile.html',
            controller: 'ProfileController',
          }
        }
      })

      .state('tabs.settings', {
        url: '/settings',
        views: {
          'settings': {
            templateUrl: 'settings/settings.html',
            controller: 'SettingsController'
          }
        }
      })

  }
];