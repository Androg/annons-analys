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
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
 
  });
