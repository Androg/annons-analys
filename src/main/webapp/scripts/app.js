'use strict';

angular.module('annons-analys', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'as.sortable',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/post', {
      templateUrl: 'views/post.html',
      controller: 'MainCtrl',
      controllerAs: 'post'
    })
      
  });
