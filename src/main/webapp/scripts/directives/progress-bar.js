angular
		.module('annons-analys')
		.directive(
				"myProgressbar",
				function() {
					return {
						template : '<div>' +

								'  <div class="row bs-wizard" style="border-bottom:0;">'
								+

								'  <div class="col-xs-3 bs-wizard-step active">'
								+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
								+ ' <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="/" class="bs-wizard-dot"></a> '
								+ '  <div class="bs-wizard-info text-center">Fill in the Job-Ad URL</div> '
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete --> '
								+ '   <div class="text-center bs-wizard-stepnum">Step 2</div>'
								+ '   <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 3</div>'
								+ '<div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
								+ ' <div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>' + ' </div>' +

								'</div>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
				})
				.directive(
				"myProgressbar2",
				function() {
					return {
						template : '<div>' +

								'  <div class="row bs-wizard" style="border-bottom:0;">'
								+

								'  <div class="col-xs-3 bs-wizard-step complete">'
								+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
								+ ' <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="views/main" class="bs-wizard-dot"></a> '
								+ '  <div class="bs-wizard-info text-center"></div> '
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step active"><!-- complete --> '
								+ '   <div class="text-center bs-wizard-stepnum">Step 2</div>'
								+ '   <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="post" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center">Fill in the companys name and the position you are looking for</div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 3</div>'
								+ '<div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
								+ ' <div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>' + ' </div>' +

								'</div>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
						}
						
					})
					.directive(
				"myProgressbar3",
				function() {
					return {
						template : '<div>' +

								'  <div class="row bs-wizard" style="border-bottom:0;">'
								+

								'  <div class="col-xs-3 bs-wizard-step complete">'
								+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
								+ ' <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a> '
								+ '  <div class="bs-wizard-info text-center"></div> '
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step complete"><!-- complete --> '
								+ '   <div class="text-center bs-wizard-stepnum">Step 2</div>'
								+ '   <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step active"><!-- complete -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 3</div>'
								+ '<div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center">Important qualities in the add, pick out those you feel are important</div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
								+ ' <div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>' + ' </div>' +

								'</div>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
					})
					.directive(
				"myProgressbar3",
				function() {
					return {
						template : '<div>' +

								'  <div class="row bs-wizard" style="border-bottom:0;">'
								+

								'  <div class="col-xs-3 bs-wizard-step complete">'
								+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
								+ ' <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a> '
								+ '  <div class="bs-wizard-info text-center">Here is where you add the Job-Ad URL</div> '
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step complete"><!-- complete --> '
								+ '   <div class="text-center bs-wizard-stepnum">Step 2</div>'
								+ '   <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center">Here is where you fill in the companys name and the position you are looking for</div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step complete"><!-- complete -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 3</div>'
								+ '<div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center">Remember pick out qualities you feel are important that matches the position</div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step active"><!-- active -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
								+ ' <div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center">Missing qualities that were not mentioned in the add, Fill them in </div>'
								+ ' </div>' + ' </div>' +

								'</div>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
					})
							.directive(
				"myProgressbar4",
				function() {
					return {
						template : '<div>' +

								'  <div class="row bs-wizard" style="border-bottom:0;">'
								+

								'  <div class="col-xs-3 bs-wizard-step complete">'
								+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
								+ ' <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a> '
								+ '  <div class="bs-wizard-info text-center"></div> '
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step complete"><!-- complete --> '
								+ '   <div class="text-center bs-wizard-stepnum">Step 2</div>'
								+ '   <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step complete"><!-- complete -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 3</div>'
								+ '<div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+

								' <div class="col-xs-3 bs-wizard-step complete"><!-- active -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
								+ ' <div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center">Fill in the missing qualities you feel are important, that were not mentioned in the add </div>'
								+ ' </div>' + ' </div>' +

								'</div>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
					});