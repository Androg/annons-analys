angular.module('annons-analys')
	.controller('PostCtrl', ['$scope', '$http', '$location', 'localStorageService'],
			function ($scope, $http, $location, localStorageService){
		
		$scope.adress = localStorageService.get('key');
	
});