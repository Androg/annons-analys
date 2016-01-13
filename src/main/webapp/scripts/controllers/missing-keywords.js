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
						function($scope, $http, localStorageService,
								store, $location) {

							$scope.position = localStorageService.get('annons-analys.position');

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
								$location.path('prioritize');
							};

							$scope.enableEditor = function(keyword) {
								$scope.editorEnabled = true;
								$scope.selectedKeyword = keyword;
							};

							$scope.save = function($event) {
								var updatedKeyword = $("#keyword-edit-field")
										.val();
								for (var i = 0; i < $scope.missingkeywords.length; i++) {
									if ($scope.missingkeywords[i] === $scope.selectedKeyword) {
										$scope.missingkeywords[i] = updatedKeyword;
										break;
									}
								}
								localStorageService.set('missingkeywords',
										$scope.missingkeywords);
							}

						} ]);
