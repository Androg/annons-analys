'use strict';
angular.module('annons-analys').controller('PostCtrl',
		[ '$scope', '$http', '$location', 'localStorageService', 'myFactory',
		function($scope, $http, $location, localStorageService, myFactory) {

			$scope.adress = localStorageService.get('key');

            myFactory.getTitleFromUrl().then(function(data) {
                $scope.title = data.data;
            });

            $scope.newPage = function() {
                $location.path('login');
            }

		}]);