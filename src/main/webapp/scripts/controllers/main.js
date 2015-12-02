'use strict';

angular.module('annons-analys').controller(
		'MainCtrl',
		[ '$scope', '$http', '$location', 'localStorageService',
				function($scope, $http, $location, localStorageService) {

					$scope.url = {};

					$scope.sendForm = function() {
						$location.path('post')
						return localStorageService.set('key', $scope.url.url);
					};

				} ]);
