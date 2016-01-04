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

							$scope.address = localStorageService.get('key');
							$scope.title = {};
							if ($scope.title != null) {
								localStorageService.get('position'),
										localStorageService.get('employer');
							}

							myFactory.getTitleFromUrl().then(function(data) {
								$scope.randomStuffdotExe = data.data;
							});

							$scope.newPage = function() {
								$location.path('keywords');
								localStorageService.set('position',
										$scope.title.title);
								localStorageService.set('employer',
										$scope.title.employer);
							};

							myFactory.getTitleFromPage($scope.adress).then(
									function(response) {
										$scope.list = response.document
												.getElementsByTagName('title');
									})

						} ]);