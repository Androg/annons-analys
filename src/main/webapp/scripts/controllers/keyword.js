'use strict';

angular.module('annons-analys').controller(
		'KeysCtrl',
		[ '$scope', '$http', '$location', 'auth', 'localStorageService', 'store',
				function($scope, $http, $location, store, auth, localStorageService) {

					$scope.keywords = localStorageService.get('keywords');
					if($scope.keywords == null){
						$scope.keywords = [];
					}
					$scope.addKeyword = function() {
						$scope.keywords.push($scope.keyword);
						//localStorageService.set('keywords', JSON.stringify($scope.keywords));
						localStorageService.set('keywords', $scope.keywords);
						$scope.keyword = '';
					};
					
					$scope.removeKeyword = function(index) {
						$scope.keywords.splice(index, 1);
					};
					
                    $scope.prioThis = function() {
                        $location.path('missing-keywords');
                    };

				} ]);
