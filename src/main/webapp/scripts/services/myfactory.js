'use strict';

/**
 * @ngdoc service
 * @name factoriesApp.myFactory
 * @description
 * # myFactory
 * Factory in the factoriesApp.
 */
angular.module('annons-analys')
  .factory('myFactory', function () {
    // Service logic
    // ...

    var jobAdUrl = '/v1/urls';


    // Public API here
    return {
        addUrl: function (url) {
          return $http.post(jobAdUrl, url);
        },
    };
    
  });
