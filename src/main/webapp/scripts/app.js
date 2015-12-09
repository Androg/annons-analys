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
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/post', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl',
      controllerAs: 'post'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
     
		  localStorageServiceProvider
		  	.setPrefix('annons-analys')
    		.setStorageType('localStorage')
    		.setNotify(true, true);
  });

