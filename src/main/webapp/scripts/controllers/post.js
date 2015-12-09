angular.module('annons-analys').controller('PostCtrl',
		[ '$scope', '$http', '$window', '$location', 'localStorageService',
		function($scope, $http, $window, $location, localStorageService) {

			$scope.adress = localStorageService.get('key');
			
			$scope.goToLink = function() {
				$location.path($scope.adress);
			}
			
			$scope.title = {};
			
			function setTitle  () {
				localStorageService.set('key', $scope.title.title);
			}
			
			$scope.confirm = function  () {
				$location.path('login')
			}

		}]);