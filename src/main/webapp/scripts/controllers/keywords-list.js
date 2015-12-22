'use strict';

angular.module('annons-analys').controller(
		'KeyCtrl',
		[ '$scope', '$http', 'auth', 'store', '$location', 'localStorageService',
				function($scope, $http, auth, localStorageService,  store, $location) {
			
			
			$scope.keywords = localStorageService.get('keywords');
			
				} ]);