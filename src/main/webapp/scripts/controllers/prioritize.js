'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'store',
				'localStorageService',
				'$location',
				function($scope, $http, localStorageService, store,
						$location) {

                    $scope.allKeywords = localStorageService.get('allKeywords');
                    $scope.newKeywordsOrder = [];
					$scope.done = function() {
                        var keywordOrder = document.getElementsByTagName('li');
                        for(var i = 0; i < keywordOrder.length; i++) {
                            $scope.newKeywordsOrder[i] = keywordOrder[i].innerText;
                        }
                        localStorageService.set('allKeywords', $scope.newKeywordsOrder);
						$location.path('standouts');
					};




				} ]);