'use strict';

angular.module(
		'annons-analys',
		[ 'LocalStorageModule',
		  'ngAnimate',
		  'ngCookies',
		  'ngResource',
		  'ngRoute',
		  'ngSanitize',
		  'ngTouch',
		  'as.sortable',
		  'angular-jwt',
		  'angular-storage',
		  'ui.sortable'
		  ])
		.config(
				function($routeProvider, localStorageServiceProvider) {

					$routeProvider.when('/', {
						templateUrl : 'views/main.html',
						controller : 'MainCtrl'
					}).when('/post', {
						templateUrl : 'views/post.html',
						controller : 'PostCtrl'
					}).when('/keywords', {
						templateUrl : 'views/keywords.html',
						controller : 'KeysCtrl'
					}).when('/missing-keywords', {
						templateUrl : 'views/missing-keywords.html',
						controller : 'MissingCtrl'
					}).when('/prioritize', {
						templateUrl : 'views/prioritize.html',
						controller : 'PrioCtrl'
					}).when('/standouts', {
						templateUrl : 'views/standouts.html',
						controller : 'StandsCtrl'
					}).when('/main', {
                        templateUrl : 'views/main.html',
                        controller : 'MainCtrl'
                    });


					localStorageServiceProvider.setStorageType('localStorage').setNotify(true,
									true);


		});
