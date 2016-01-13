'use strict';

angular.module('annons-analys').controller(
		'KeysCtrl',
		[
				'$scope',
				'$http',
				'store',
				'localStorageService',
				'$location',
                'myFactory',
				function($scope, $http, localStorageService, store,
						$location, myFactory) {
					$scope.editorEnabled = false;

					$scope.keywords = localStorageService.get('keywords');
					if ($scope.keywords == null) {
						$scope.keywords = [];
					}
					$scope.addKeyword = function() {
						$scope.keywords.push($scope.keyword);
						$scope.keyword = '';
						localStorageService.set('keywords', $scope.keywords);
					};

					$scope.removeKeyword = function(index) {
						$scope.keywords.splice(index, 1);
						localStorageService.set('keywords', $scope.keywords);
					};

					$scope.nextView = function() {
                        console.log('{ keyword : ' + '"' +$scope.keywords  + '"}');
                        myFactory.saveKeywordsToDatabase('{ keyword : ' + '"' +$scope.keywords  + '"}');
						$location.path('missing-keywords');
					};

					$scope.enableEditor = function(keyword) {
						$scope.editorEnabled = true;
						$scope.selectedKeyword = keyword;
						$('body').on('hidden.bs.modal', '.modal', function () { 
							  $(this).find('input[type="text"],textarea,select').each(function() { 
							         this.value = this.defaultValue; 
							  }); 
							}); 
					};
					
					 $scope.disableEditor = function () {
					        $scope.editorEnabled = false;
					      };

					$scope.save = function($event) {
						var updatedKeyword = $("#keyword-edit-field").val();
						for (var i = 0; i < $scope.keywords.length; i++) {
							if ($scope.keywords[i] === $scope.selectedKeyword) {
								$scope.keywords[i] = updatedKeyword;
								break;
							}
					        $scope.editorEnabled = false;

						}
						localStorageService.set('keywords', $scope.keywords);
					}

				} ]);
