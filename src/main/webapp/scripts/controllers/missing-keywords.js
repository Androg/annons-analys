'use strict';

angular.module('annons-analys').controller(
		'MissingCtrl',
		[ '$scope', '$location', 'store', 'auth', 'localStorageService',
				function($scope, $location, store, auth, localStorageService) {
					$scope.missingkeywords = localStorageService.get('missingkeywords');
					if($scope.missingkeywords == null){
						$scope.missingkeywords = [];
					}
					$scope.addKeyword = function() {
						$scope.missingkeywords.push($scope.missingkeyword);
						//localStorageService.set('keywords', JSON.stringify($scope.keywords));
						localStorageService.set('missingkeywords', $scope.missingkeywords);
					//	$scope.keyword = '';
					};
					
					$scope.removeKeyword = function(index) {
						$scope.keywords.splice(index, 1);
					};
					
					  $scope.goToPrio = function() {
			                $location.path('prioritize');
					  };
				} ]);
