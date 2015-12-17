'use strict';

angular.module('annons-analys', [
    'LocalStorageModule',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'as.sortable',
    'auth0',
    'angular-jwt',
    'angular-storage'
  ])
  .config(function ($routeProvider, authProvider, localStorageServiceProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/post', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
        .when('/keywords', {
        templateUrl: 'views/keywords.html',
        controller: 'KeysCtrl'
      })


		  localStorageServiceProvider
		  	.setPrefix('annons-analys')
    		.setStorageType('localStorage')
    		.setNotify(true, true);

        authProvider.init({
            domain: 'cruited.eu.auth0.com',
            clientID: 'eTeOj49y9jKol7ZaNaeXMKJCfJZtJrte'
        });
}).run(function (auth) {
        auth.hookEvents();
    });

