'use strict';

angular
		.module('annons-analys')
		.controller(
				'InfoCtrl',
				[
						'$scope',
						'$http',
						'store',
						'localStorageService',
						'$location',
						function($scope, $http, localStorageService, store,
								$location) {

							$scope.info = localStorageService.get('info');
							if ($scope.info == null) {
								$scope.info = {};
							}
							
							
							$scope.saveInfo = function() {
								localStorageService.set('info', $scope.info.info);
								$location.path('standouts');
							};
						} ]);
