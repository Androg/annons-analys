'use strict';

angular.module('annons-analys').controller(
		'StandsCtrl',
		[
				'$scope',
				'$http',
				'store',
				'$location',
				'localStorageService',
                'myFactory',
				function($scope, $http, localStorageService, store,
						$location, myFactory) {

					$scope.keywords = localStorageService.get('keywords');
					$scope.missingkeywords = localStorageService.get('missingkeywords');

                    $scope.theKeywords = localStorageService.get('allKeywords');

                    $scope.allKeywords = { keywords: []};

                    $scope.confirmAll = function() {
                        for(var i = 0; i < $scope.keywords.length; i++) {
                            $scope.allKeywords.keywords.push($scope.keywords[i]);
                        }
                        for(var i = 0; i < $scope.missingkeywords.length; i++) {
                            $scope.allKeywords.keywords.push($scope.missingkeywords[i]);
                        }

                        myFactory.saveKeywordsToDatabase($scope.allKeywords);

                    }

				} ]);
