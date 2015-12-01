'use strict';

angular.module('annons-analys')
	.controller('MainCtrl', function ($scope, $http, $locationProvider) {
		
		$scope.url = {};
		$scope.sendForm = function () {
			myFactory.addUrl($scope.url) 
		};
		$location.path('/post.html').search({key: value});
	});