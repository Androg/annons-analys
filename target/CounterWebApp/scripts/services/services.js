
angular.module('annons-analys', ['ngResource'])
    .factory('UserFactory', function ($resource) {
    return $resource('/rest/users', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});