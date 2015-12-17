'use strict';

angular.module('annons-analys').controller(
		'KeysCtrl',
		[ '$scope', '$http', 'auth', 'store', '$location',
				function($scope, $http, auth, store, $location) {
					$scope.keywords = [];
					$scope.addKeyword = function() {
						$scope.keywords.push($scope.keyword);
						$scope.keyword = '';
					};
					$scope.removeKeyword = function(index) {
						$scope.keywords.splice(index, 1);
					}
				} ]);
