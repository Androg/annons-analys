'use strict';

angular.module('annons-analys').controller('MainCtrl',
		[ '$scope', '$http', '$location', function($scope, $http, $location, localStorageService) {

			$scope.test = null;

			$scope.sendForm = function(post) {
				 $location.path('post')
				$scope.test = $scope.url;
			};
		} ]);



			
			
