'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'store',
				'localStorageService',
				'$location',
                'myFactory',
				function($scope, $http, localStorageService, store, $location, myFactory) {

					var keywords = localStorageService.get('keywords');
					var missingKeywords = localStorageService
							.get('missingkeywords');


					$scope.allKeywords = keywords.concat(missingKeywords);


					$scope.done = function() {
						localStorageService.set('allkeywords', $scope.allKeywords);

						$location.path('info');
					};

				} ]);