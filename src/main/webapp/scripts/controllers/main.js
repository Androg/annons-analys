'use strict';

angular.module('annons-analys').controller(
		'MainCtrl',
		[
				'$scope',
				'$http',
				'$location',
				'localStorageService',
				'myFactory',
				function($scope, $http, $location, localStorageService,
						myFactory) {

					$scope.url = {};

					$scope.sendForm = function() {
						$location.path('post');
						myFactory.addUrl($scope.url).then(function(data) {
							$scope.postades = data.status;
						});
						return localStorageService.set('key', $scope.url.url);
					};
				} ]);
