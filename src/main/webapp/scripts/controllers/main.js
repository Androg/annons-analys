'use strict';

angular.module('annons-analys')
		.controller(
				'MainCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						'$location',
						'localStorageService',
						'myFactory',
						function($scope, $rootScope, $http, $location,
								localStorageService, myFactory) {

							$scope.url = {};

							$scope.keywords = [ "HEJ", "bajs", "test" ];

							$scope.state = false;

							$scope.toggleState = function() {
								$scope.state = !$scope.state;
								if ($scope.state === true) {
									console.log($scope.state);
									document.getElementById("sidebar").classList
											.add("show");
								} else {
									console.log($scope.state);
									document.getElementById("sidebar").classList
											.remove("show");
								}

							};

							$scope.validateURL = function(textval) {
								var urlregex = /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;

								if (urlregex.test(textval) === true) {
									$location.path('qualities');
									myFactory.addUrl($scope.url).then(
											function(data) {
												$scope.postades = data.status;
											});
									localStorageService.set('url',
											$scope.url.url);
								} else {
									document.getElementById("invalidUrl").className = "ng-show";
								}
							};

							$scope.start = function() {
								$location.path('main');
							};

						} ]);
