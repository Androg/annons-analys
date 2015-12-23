'use strict';

angular.module('annons-analys').controller(
		'MissingCtrl',
		[
				'$scope',
				'$http',
				'auth',
				'store',
				'localStorageService',
				'$location',
				function($scope, $http, auth, localStorageService, store,
						$location) {
					$scope.missingkeywords = localStorageService
							.get('missingkeywords');
					if ($scope.missingkeywords == null) {
						$scope.missingkeywords = [];
					}
					$scope.addKeyword = function() {
						$scope.missingkeywords.push($scope.missingkeyword);
						localStorageService.set('missingkeywords',
								$scope.missingkeywords);
					};

					$scope.removeKeyword = function(index) {
						$scope.keywords.splice(index, 1);
					};

					$scope.goToPrio = function() {
						$location.path('prioritize');
					};
				} ]);
