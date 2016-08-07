'use strict';

var SettingsController = require('./settings-controller');


module.exports = angular.module('settings', [])

  // controllers
  .controller('SettingsController', SettingsController);
