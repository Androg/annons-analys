'use strict';

/**
 * @ngdoc service
 * @name factoriesApp.myFactory
 * @description
 * # myFactory
 * Factory in the factoriesApp.
 */
angular.module('annons-analys')
    .factory('myFactory', function ($http) {

        var jobAdUrl = '/v1/urls';

        return {
            addUrl: function (url) {
                return $http.post(jobAdUrl, url);
            }
        };

    });