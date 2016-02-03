'use strict';

/**
 * @ngdoc service
 * @name factoriesApp.myFactory
 * @description # myFactory Factory in the factoriesApp.
 */
angular.module('annons-analys').factory('myFactory', function($http) {

	var jobAdUrl = 'v1/urls';
    var jobAdEmpPos = 'v1/employer';
    var jobAdKeywords = 'v1/keywords';

        return {
            addUrl: function (url) {
                return $http.post(jobAdUrl, url);
            },
            saveEmployerAndPosition: function (post) {
                return $http.post(jobAdEmpPos, post);
            },
            saveKeywordsToDatabase: function (keywords) {
                return $http.post(jobAdKeywords, keywords);
            }
        };

});