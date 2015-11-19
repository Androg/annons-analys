'use strict';

/**
 * @ngdoc overview
 * @name taskboardApp
 * @description
 * # taskboardApp
 *
 * Main module of the application.
 */
angular
  .module('annons-analys', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'as.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
<<<<<<< HEAD
      .when('/', {
=======
      .when('/main', {
>>>>>>> 0e9cfbc6b5973c19b242398e86e884a153b59bb0
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
<<<<<<< HEAD
=======
 
>>>>>>> 0e9cfbc6b5973c19b242398e86e884a153b59bb0
  });
