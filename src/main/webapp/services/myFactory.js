'use strict';

/**
 * @ngdoc service
 * @name factoriesApp.myFactory
 * @description # myFactory Factory in the factoriesApp.
 */
angular.module('annons-analys').factory('myFactory', function($http) {

	var jobAdUrl = '/v1/urls';

        return {
            addUrl: function (url) {
                return $http.post(jobAdUrl, url);
            },
            getTitleFromUrl: function() {
                return $http.get(jobAdUrl + '/getTitle');
            },
            getTitleFrompage: function(url) {
                return $http.get(url);
<<<<<<< HEAD
            },
=======
            }
>>>>>>> 598dfe38ad66dd1575398948c9f89141ed5e2bd4
        };

});