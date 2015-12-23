'use strict';
angular.module('annons-analys').controller('PostCtrl',
		[ '$scope', '$http', '$location', 'localStorageService', 'myFactory',
		function($scope, $http, $location, localStorageService, myFactory) {

			$scope.adress = localStorageService.get('key');

            $scope.title = {};

            myFactory.getTitleFromUrl().then(function(data) {
                $scope.randomStuffdotExe = data.data;
            });


            $scope.newPage = function() {
                console.log($scope.title.title);
                console.log($scope.title.employer);
                $location.path('keywords');
            };

            myFactory.getTitleFromPage($scope.adress).then(function(response) {
                $scope.list = response.document.getElementsByTagName('title');
            })

		}]);