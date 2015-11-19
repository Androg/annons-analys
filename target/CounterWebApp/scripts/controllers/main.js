'use strict';

angular.module('annons-analys')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.urls = [];
		$scope.addUrl = function () {
			$scope.urls.push($scope.url);
			$scope.url = '';
		};
		$scope.removeUrl = function (index) {
			$scope.urls.splice(index, 1);
		};
	});