'use strict';

//var feedService = require('./feed-service');

module.exports = angular.module('feed', [])

	//.service('feedService', feedService)
	.controller('FeedController', require('./feed-controller'));
