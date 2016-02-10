'use strict';

angular
		.module('annons-analys')
		.controller(
				'QualityCtrl',
				[
						'$scope',
						'$http',
						'store',
						'localStorageService',
						'$location',
						function($scope, $http, localStorageService, store,
								$location) {

							
							
							$scope.cont = function() {
								$location.path('keywords');
							};
						} ]);
