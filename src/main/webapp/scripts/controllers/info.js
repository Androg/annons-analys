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
							
							$scope.toggleState = function() {
								$scope.state = !$scope.state;
								if ($scope.state === true) {
									document.getElementById("sidebar").classList
											.add("show");
								} else {
									document.getElementById("sidebar").classList
											.remove("show");
								}

							};
						} ]);
