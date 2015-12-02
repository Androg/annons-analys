'use strict';

angular.module('annons-analys')
	.controller('MainCtrl',['localStorageService','myFactory', '$location' ,function ($scope, myFactory, $location, localStorageService) {
		$scope.url = {};



		$scope.sendForm = function(key) {
            return localStorageService.set(key, $scope.url);
		};

        console.log($scope.url);

		myFactory.getTitleFromUrl().then(function(data) {
            return data;
        });

	}]);