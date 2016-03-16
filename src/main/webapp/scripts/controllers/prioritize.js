'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'store',
				'localStorageService',
				'$location',
                'myFactory',
				function($scope, $http, localStorageService, store, $location, myFactory) {

					var keywords = localStorageService.get('keywords');
					var missingKeywords = localStorageService
							.get('missingkeywords');

                    var newWords = [];


					$scope.allKeywords = keywords.concat(missingKeywords);


					$scope.done = function() {
                        var $wordlistitems = $("#wordlist").children();
                        $wordlistitems.each(function() {
                            var currentLi = this;
                            newWords.push(currentLi.innerHTML);
                        });

						localStorageService.set('allKeywords', newWords);

						$location.path('info');
					};
					
					$scope.toggleState = function() {
						$scope.state = !$scope.state;
						if ($scope.state === true) {
							document.getElementById("sidebar").classList
									.add("show");
						} else {
							document.getElementById("sidebar").classList
									.remove("show");
						}

					};

				} ]);