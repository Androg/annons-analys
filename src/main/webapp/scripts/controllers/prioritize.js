'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'store',
				'localStorageService',
				'$location',
				function($scope, $http, localStorageService, store, $location) {

					var keywords = localStorageService.get('keywords');
					var missingKeywords = localStorageService
							.get('missingkeywords');

					$scope.allKeywords = keywords.concat(missingKeywords);
					

					$scope.done = function() {
						localStorageService.set('allKeywords', $scope.allKeywords);
						$location.path('standouts');
					};

                    $scope.theWords = localStorageService.get('allKeywords');
				} ]);