'use strict';

angular.module('annons-analys').controller(
		'KeysCtrl',
		[ '$scope', '$http', 'store', 'localStorageService', '$location',
				function($scope, $http, localStorageService, store, $location) {

					$scope.keywords = localStorageService.get('keywords');
					if ($scope.keywords == null) {
						$scope.keywords = [];
					}

					$scope.addKeyword = function() {
						$scope.keywords.push($scope.keyword);
						$scope.keyword = '';
						localStorageService.set('keywords', $scope.keywords);
					};

					$scope.removeKeyword = function(index) {
						$scope.keywords.splice(index, 1);
						localStorageService.set('keywords', $scope.keywords);
					};

					$scope.nextView = function() {
<<<<<<< HEAD
                        var $inputs = $("#jobTitle").find("input");

                        var keywords = [];
                        $inputs.each(function() {
                            keywords.push($(this).val());
                        });
                        localStorageService.set('keywords', keywords);
=======
						var $inputs = $("#jobTitle").find("input");
						
						var keywords = [];
						$inputs.each(function() {
							keywords.push($(this).val());
						});
						
						localStorageService.set('keywords', keywords);
						
>>>>>>> origin/master
						$location.path('missing-keywords');
						
					};

				} ]);


