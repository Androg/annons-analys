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
									document.getElementById("sidebar").classList
											.add("show");
								} else {
									document.getElementById("sidebar").classList
											.remove("show");
								}

							};
						} ]);
