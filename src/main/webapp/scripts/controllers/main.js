'use strict';

angular.module('annons-analys')
	.controller('MainCtrl', function ($scope, myFactory, $http) {
		$scope.url = {};

		$scope.sendForm = function() {
			myFactory.addUrl($scope.url);
				console.log($scope.url);
		}


	});