'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'store',
				'localStorageService',
				'$location',
				function($scope, $http, localStorageService, store,
						$location) {

					$scope.done = function() {
						$location.path('standouts');
					};

					$scope.keywords = localStorageService.get("keywords");
					$scope.missingkeywords = localStorageService.get('missingkeywords');

                    $scope.allKeywords = localStorageService.get('allKeywords');

				} ]);