'use strict';

angular.module(
		'annons-analys',
		[ 'LocalStorageModule', 'ngAnimate', 'ngCookies', 'ngResource',
				'ngRoute', 'ngSanitize', 'ngTouch', 'as.sortable',
				'angular-jwt', 'angular-storage', 'ui.sortable' ]).config(
		function($routeProvider, localStorageServiceProvider) {

			$routeProvider.when('/', {
				templateUrl : 'views/welcome.html',
				controller : 'MainCtrl'
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
			}).when('/qualities', {
				templateUrl : 'views/qualities.html',
				controller : 'QualityCtrl'
			}).when('/info', {
				templateUrl : 'views/info.html',
				controller : 'InfoCtrl'
			}).when('/main', {
				templateUrl : 'views/main.html',
				controller : 'MainCtrl'
			});

			localStorageServiceProvider.setStorageType('localStorage')
					.setNotify(true);

		});
