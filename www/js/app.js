'use strict';

//require('angular');
require('ionic');

require('./base/base');
require('./feed/feed');
require('./profile/profile');
require('./settings/settings');

module.exports = angular.module('ionic-amd', [
    'ionic',
    'base',
    'feed',
    'profile',
    'settings'
  ])
  
  .config(require('./app-router'))
  .run(require('./run'));
