'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'auth',
				'store',
				'$location',
				'localStorageService',
				function($scope, $http, auth, localStorageService, store,
						$location) {

					$scope.keywords = localStorageService.get('keywords');
					$scope.missingkeywords = localStorageService
							.get('missingkeywords');


                    $scope.models = {
                        selected: null,
                        lists: {"A": []}
                    };

                    // Generate initial model
                    for (var i = 1; i <= 3; ++i) {
                        $scope.models.lists.A.push($scope.keywords.slice(i));
                        $scope.models.lists.A.push($scope.missingkeywords.slice(i));
                    }

				} ]);
