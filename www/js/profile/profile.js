'use strict';

var ProfileController = require('./profile-controller');


module.exports = angular.module('profile', [])

  // controllers
  .controller('ProfileController', ProfileController);