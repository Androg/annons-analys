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
							
							$scope.position = localStorageService.get('annons-analys.position');
                            $scope.keywords = localStorageService.get('keywords');
                            $scope.allKeywords = [];

							$scope.missingkeywords = localStorageService
									.get('missingkeywords');

							if ($scope.missingkeywords == null) {
								$scope.missingkeywords = [];
							}
							$scope.addKeyword = function() {
								$scope.missingkeywords.push($scope.missingkeyword);
								$scope.missingkeyword = '';
								localStorageService.set('missingkeywords',$scope.missingkeywords);
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
								
								localStorageService.set('missingkeywords', missingkeywords);

								$location.path('prioritize');
								
							};
						} ]);
