'use strict';

angular
		.module('annons-analys')
		.controller(
				'MissingCtrl',
				[
						'$scope',
						'$http',
						'store',
						'localStorageService',
						'$location',
						function($scope, $http, localStorageService, store,
								$location) {
							$scope.position = localStorageService
									.get('position');

							$scope.position = localStorageService
									.get('annons-analys.position');
							$scope.keywords = localStorageService
									.get('keywords');
							$scope.allKeywords = [];

							$scope.missingkeywords = localStorageService
									.get('missingkeywords');

							if ($scope.missingkeywords == null) {
								$scope.missingkeywords = [];
							}
							$scope.addKeyword = function() {
								$scope.missingkeywords
										.push($scope.missingkeyword);
								$scope.missingkeyword = '';
								localStorageService.set('missingkeywords',
										$scope.missingkeywords);
							};

							$scope.removeKeyword = function(index) {
								$scope.missingkeywords.splice(index, 1);
								localStorageService.set('missingkeywords',
										$scope.missingkeywords);
							};

							$scope.goToPrio = function() {

								var $inputs = $("#jobTitle").find("input");

								var missingkeywords = [];
								$inputs.each(function() {
									missingkeywords.push($(this).val());
								});

								localStorageService.set('missingkeywords',
										missingkeywords);

								for (var i = 0; i < $scope.keywords.length; i++) {
									$scope.allKeywords.push($scope.keywords[i]);
								}
								for (var i = 0; i < $scope.missingkeywords.length; i++) {
									$scope.allKeywords
											.push($scope.missingkeywords[i]);
								}

								localStorageService.set('allKeywords',
										$scope.allKeywords);
								var $inputs = $("#jobTitle").find("input");

								var missingkeywords = [];
								$inputs.each(function() {
									missingkeywords.push($(this).val());
								});

								localStorageService.set('missingkeywords',
										missingkeywords);

								$location.path('prioritize');

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
