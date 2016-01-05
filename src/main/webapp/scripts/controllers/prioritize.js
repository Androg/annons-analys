'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'auth',
				'store',
				'localStorageService',
				'$location',
				function($scope, $http, auth, localStorageService, store,
						$location) {

					$scope.done = function() {
						$location.path('standouts');
					};

					$scope.keywords = localStorageService.get("keywords");
					$scope.missingkeywords = localStorageService
							.get('missingkeywords');

				} ]);