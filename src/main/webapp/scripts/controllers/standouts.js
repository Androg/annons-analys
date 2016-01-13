'use strict';

angular.module('annons-analys').controller(
		'StandsCtrl',
		[
				'$scope',
				'$http',
				'store',
				'$location',
				'localStorageService',
				function($scope, $http, localStorageService, store,
						$location) {

					$scope.keywords = localStorageService.get('keywords');
					$scope.missingkeywords = localStorageService.get('missingkeywords');

				} ]);
