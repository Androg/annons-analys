'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[ '$scope', '$http', 'auth', 'store', '$location', 'localStorageService',
				function($scope, $http, auth, localStorageService,  store, $location) {
			
			
			$scope.keywords = localStorageService.get('keywords');
			$scope.missingkeywords = localStorageService.get('missingkeywords');

                    $scope.models = {
                        selected: null,
                        lists: {"A": [], "B": []}
                    };

                    // Generate initial model
                    for (var i = 1; i <= 3; ++i) {
                        $scope.models.lists.A.push({missingkeyword: "Item A" + i});
                        $scope.models.lists.B.push({keyword: "Item B" + i});
                    }

                    // Model to JSON for demo purpose
                    $scope.$watch('models', function(model) {
                        $scope.modelAsJson = angular.toJson(model, true);
                    }, true);



                } ]);
