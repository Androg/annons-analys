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
							
							$scope.toggleState = function() {
								$scope.state = !$scope.state;
								if ($scope.state === true) {
									console.log($scope.state);
									document.getElementById("sidebar").classList
											.add("show");
								} else {
									console.log($scope.state);
									document.getElementById("sidebar").classList
											.remove("show");
								}

							};
						} ]);
