'use strict';

angular.module('annons-analys').controller(
<<<<<<< HEAD
		'StandsCtrl',
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

				} ]);
=======
    'StandsCtrl',
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

        } ]);
>>>>>>> 4facbda0639a04370765e0fc2e754583b4c1dcb3
