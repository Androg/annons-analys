'use strict';

angular.module('annons-analys').controller(
		'KeysCtrl',
		[ '$scope', '$http', 'auth', 'store', 'localStorageService', '$location',
				function($scope, $http, auth, store, localStorageService, $location) {
					$scope.keywords = localStorageService.get('keywords')
					if($scope.keywords == null){
						$scope.keywords = [];
					}
					$scope.addKeyword = function() {

						$scope.keywords.push($scope.keyword);
						$scope.keyword = localStorageService.set('keywords', $scope.keywords);
						// $scope.keyword = '';
						// localStorageService.set('keywords',
						// JSON.stringify($scope.keywords));
						localStorageService.set('keywords', $scope.keywords);
					// $scope.keyword = '';
					};
					
					$scope.removeKeyword = function(index) {
						$scope.keywords.splice(index, 1);
					};
					
					$scope.goTo = function() {
		                $location.path('missing-keywords');
		            };
				} ]);
