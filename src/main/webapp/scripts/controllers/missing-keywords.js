'use strict';

angular
<<<<<<< HEAD
		.module('annons-analys')
		.controller(
				'MissingCtrl',
				[
						'$scope',
						'$http',
						'auth',
						'store',
						'localStorageService',
						'$location',
						function($scope, $http, auth, localStorageService,
								store, $location) {
							$scope.position = localStorageService.get('position');
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
=======
    .module('annons-analys')
    .controller(
    'MissingCtrl',
    [
        '$scope',
        '$http',
        'auth',
        'store',
        'localStorageService',
        '$location',
        function($scope, $http, auth, localStorageService,
                 store, $location) {
            $scope.position = localStorageService.get('position');
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
>>>>>>> 4facbda0639a04370765e0fc2e754583b4c1dcb3
