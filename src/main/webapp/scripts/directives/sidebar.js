angular
		.module('annons-analys')
		.directive(
				"mySidebar",
				function() {
					return {
						template : '<div>'
								+ '<div id="sidebar" class="sidebar">'
								+ '<span class="glyphicon glyphicon-align-justify" id="navigation-toggle" ng-click="toggleState()"></span>'
								+ '<ul class="navigation">'
								+ '<li class="navigation-items"><a href="#main">Step 1<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
								+ '<li class="navigation-items"><a href="#qualities">Step 2<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
								+ '<li class="navigation-items"><a href="#keywords">Step 3<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
								+ '<li class="navigation-items"><a href="#missing-keywords">Step 4<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
								+ '<li class="navigation-items"><a href="#prioritize">Step 5<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
								+ '<li class="navigation-items"><a href="#info">Step 6<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
								+ '<li class="navigation-items"><a href="#standouts">Step 7<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
								+ '</ul>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
}).directive(
	"mySidebar2",
     function() {
		return {
			template : '<div>'
				+ '<div id="sidebar" class="sidebar">'
				+ '<span class="glyphicon glyphicon-align-justify" id="navigation-toggle" ng-click="toggleState()"></span>'
				+ '<ul class="navigation">'
				+ '<li class="navigation-items"><a href="#main">Step 1<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
				+ '<li class="navigation-items"><a href="#qualities">Step 2<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
				+ '<li class="navigation-items"><a href="#keywords">Step 3<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
				+ '<li class="navigation-items"><a href="#missing-keywords">Step 4<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
				+ '<li class="navigation-items"><a href="#prioritize">Step 5<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
				+ '<li class="navigation-items"><a href="#info">Step 6<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
				+ '<li class="navigation-items"><a href="#standouts">Step 7<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
				+ '</ul>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
		}
}).directive(
		"mySidebar3",
		function() {
			return {
				template : '<div>'
						+ '<div id="sidebar" class="sidebar">'
						+ '<span class="glyphicon glyphicon-align-justify" id="navigation-toggle" ng-click="toggleState()"></span>'
						+ '<ul class="navigation">'
						+ '<li class="navigation-items"><a href="#main">Step 1<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#qualities">Step 2<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#keywords">Step 3<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#missing-keywords">Step 4<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#prioritize">Step 5<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#info">Step 6<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#standouts">Step 7<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '</ul>' + '</div>',

				restrict : 'E',
				link : function postLink(scope, element, attrs) {
					element.text();
				}
			}
}).directive(
		"mySidebar4",
		function() {
			return {
				template : '<div>'

						+ '<div id="sidebar" class="sidebar">'
						+ '<span class="glyphicon glyphicon-align-justify" id="navigation-toggle" ng-click="toggleState()"></span>'
						+ '<ul class="navigation">'
						+ '<li class="navigation-items"><a href="#main">Step 1<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#qualities">Step 2<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#keywords">Step 3<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#missing-keywords">Step 4<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#prioritize">Step 5<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#info">Step 6<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#standouts">Step 7<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '</ul>' + '</div>',

				restrict : 'E',
				link : function postLink(scope, element, attrs) {
					element.text();
				}
			}
}).directive(
		"mySidebar5",
		function() {
			return {
				template : '<div>'
						+ '<div id="sidebar" class="sidebar">'
						+ '<span class="glyphicon glyphicon-align-justify" id="navigation-toggle" ng-click="toggleState()"></span>'
						+ '<ul class="navigation">'
						+ '<li class="navigation-items"><a href="#main">Step 1<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#qualities">Step 2<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#keywords">Step 3<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#missing-keywords">Step 4<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#prioritize">Step 5<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#info">Step 6<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '<li class="navigation-items"><a href="#standouts">Step 7<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '</ul>' + '</div>',

				restrict : 'E',
				link : function postLink(scope, element, attrs) {
					element.text();
				}
			}
}).directive(
		"mySidebar6",
		function() {
			return {
				template : '<div>'
						+ '<div id="sidebar" class="sidebar">'
						+ '<span class="glyphicon glyphicon-align-justify" id="navigation-toggle" ng-click="toggleState()"></span>'
						+ '<ul class="navigation">'
						+ '<li class="navigation-items"><a href="#main">Step 1<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#qualities">Step 2<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#keywords">Step 3<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#missing-keywords">Step 4<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#prioritize">Step 5<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#info">Step 6<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#standouts">Step 7<span id="chkbox" class="glyphicon glyphicon-star-empty"></a></li>'
						+ '</ul>' + '</div>',

				restrict : 'E',
				link : function postLink(scope, element, attrs) {
					element.text();
				}
			}
}).directive(
		"mySidebar7",
		function() {
			return {
				template : '<div>'
						+ '<div id="sidebar" class="sidebar">'
						+ '<span class="glyphicon glyphicon-align-justify" id="navigation-toggle" ng-click="toggleState()"></span>'
						+ '<ul class="navigation">'
						+ '<li class="navigation-items"><a href="#main">Step 1<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#qualities">Step 2<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#keywords">Step 3<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#missing-keywords">Step 4<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#prioritize">Step 5<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#info">Step 6<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '<li class="navigation-items"><a href="#standouts">Step 7<span id="chkbox" class="glyphicon glyphicon-star"></a></li>'
						+ '</ul>' + '</div>',

				restrict : 'E',
				link : function postLink(scope, element, attrs) {
					element.text();
				}
			}
		});

