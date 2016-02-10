'use strict';
angular.module('annons-analys')
		.controller(
				'PostCtrl',
				[
						'$scope',
						'$http',
						'$location',
						'localStorageService',
						'myFactory',
						function($scope, $http, $location, localStorageService,
								myFactory) {

							$scope.address = localStorageService.get('url');
							$scope.title = {};

							$scope.newPage = function() {
                                localStorageService.set('position', $scope.title.title);
                                localStorageService.set('employer', $scope.title.employer);
                                myFactory.saveEmployerAndPosition($scope.title);
								$location.path('qualities');
							};

							$scope.list = localStorageService.get('employer');

						} ]);