angular.module('annons-analys').controller(
		'LoginCtrl',
		[ '$scope', '$http', '$location', 'auth', 'localStorageService',
				function($scope, $http, $location, auth, localStorageService) {
					$scope.login = function () {
						auth.signin({}, function(profile, token) {
							// Success callback
							store.set('profile', profile);
							store.set('token', token);
							$location.path('/');
						}, function() {
							// Error callback
						});
					}

				} ]);