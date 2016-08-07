'use strict';

require('ionic');

require('./base/base');

module.exports = angular.module('ionic-amd', [
    'ionic',
    'base'
  ])
  
  .config(require('./app-router'))
  .run(require('./run'));
