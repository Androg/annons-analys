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

					var keywords = localStorageService.get("keywords");
					var missingKeywords = localStorageService
					.get('missingkeywords');
					
					Array.prototype.push.apply(keywords, missingKeywords);
					$scope.allKeywords = keywords;
				} ]);