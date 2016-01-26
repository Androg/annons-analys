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

                    var theKeys = {keywords : []};


					$scope.allKeywords = keywords.concat(missingKeywords);


					$scope.done = function() {
						localStorageService.set('allKeywords', $scope.allKeywords);

                        for(var i = 0; i < $scope.allKeywords.length; i++) {
                            theKeys.keywords.push($scope.allKeywords[i]);
                        }
                        console.log(theKeys);
                        myFactory.saveKeywordsToDatabase(theKeys);

						$location.path('standouts');
					};

                    $scope.theWords = localStorageService.get('allKeywords');
				} ]);