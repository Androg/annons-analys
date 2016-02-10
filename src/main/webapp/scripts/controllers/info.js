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
                        'myFactory',
						function($scope, $http, localStorageService, store,
								$location, myFactory) {

							$scope.info = {};
							
							
							$scope.saveInfo = function() {
                                myFactory.saveInfoToDatabase($scope.info);
								localStorageService.set('info', $scope.info.info);
								$location.path('standouts');
							};
						} ]);
