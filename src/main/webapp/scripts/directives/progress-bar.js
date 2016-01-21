angular
		.module('annons-analys')
		.directive(
				"myProgressbar",
				function() {
					return {
						template : '<div>'
							+ '  <div class="row bs-wizard" style="border-bottom:0;">'
							+ '  <div class="col-xs-3 bs-wizard-step active">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ '  <div class="col-xs-3 bs-wizard-step disabled">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 2</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete --> '
							+ '   <div class="text-center bs-wizard-stepnum">Step 3</div>'
							+ '   <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 5</div>'
							+ ' <div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 6</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>' + '</div>',

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
						template : '<div>'
							+ '  <div class="row bs-wizard" style="border-bottom:0;">'
							+ '  <div class="col-xs-3 bs-wizard-step complete">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ '  <div class="col-xs-3 bs-wizard-step active">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 2</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete --> '
							+ '   <div class="text-center bs-wizard-stepnum">Step 3</div>'
							+ '   <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 5</div>'
							+ ' <div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 6</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>' + '</div>',

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
						template : '<div>'
							+ '  <div class="row bs-wizard" style="border-bottom:0;">'
							+ '  <div class="col-xs-3 bs-wizard-step complete">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ '  <div class="col-xs-3 bs-wizard-step complete">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 2</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step active"><!-- complete --> '
							+ '   <div class="text-center bs-wizard-stepnum">Step 3</div>'
							+ '   <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 5</div>'
							+ ' <div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 6</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>' + '</div>',

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
						template : '<div>'
							+ '  <div class="row bs-wizard" style="border-bottom:0;">'
							+ '  <div class="col-xs-3 bs-wizard-step complete">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ '  <div class="col-xs-3 bs-wizard-step complete">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 2</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step complete"><!-- complete --> '
							+ '   <div class="text-center bs-wizard-stepnum">Step 3</div>'
							+ '   <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step active"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- active -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 5</div>'
							+ ' <div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 6</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
				})
		.directive(
				"myProgressbar5",
				function() {
					return {
						template : '<div>'
							+ '  <div class="row bs-wizard" style="border-bottom:0;">'
							+ '  <div class="col-xs-3 bs-wizard-step complete">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ '  <div class="col-xs-3 bs-wizard-step complete">'
							+ '  <div class="text-center bs-wizard-stepnum">Step 2</div> '
							+ ' <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a> '
							+ '  <div class="bs-wizard-info text-center"></div> '
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step complete"><!-- complete --> '
							+ '   <div class="text-center bs-wizard-stepnum">Step 3</div>'
							+ '   <div class="progress"><div class="progress-bar"></div></div> '
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step complete"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ ' </div>'
							+ ' <div class="col-xs-3 bs-wizard-step active"><!-- active -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 5</div>'
							+ ' <div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>'
							+ ' <div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
							+ ' <div class="text-center bs-wizard-stepnum">Step 6</div>'
							+ '<div class="progress"><div class="progress-bar"></div></div>'
							+ ' <a href="#" class="bs-wizard-dot"></a>'
							+ '  <div class="bs-wizard-info text-center"></div>'
							+ '</div>' + '</div>',

						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
				})
		.directive(
				"myProgressbar6",
				function() {
					return {
						template : '<div>'
								+ '  <div class="row bs-wizard" style="border-bottom:0;">'
								+ '  <div class="col-xs-3 bs-wizard-step complete">'
								+ '  <div class="text-center bs-wizard-stepnum">Step 1</div> '
								+ ' <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a> '
								+ '  <div class="bs-wizard-info text-center"></div> '
								+ ' </div>'
								+ '  <div class="col-xs-3 bs-wizard-step complete">'
								+ '  <div class="text-center bs-wizard-stepnum">Step 2</div> '
								+ ' <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a> '
								+ '  <div class="bs-wizard-info text-center"></div> '
								+ ' </div>'
								+ ' <div class="col-xs-3 bs-wizard-step complete"><!-- complete --> '
								+ '   <div class="text-center bs-wizard-stepnum">Step 3</div>'
								+ '   <div class="progress"><div class="progress-bar"></div></div> '
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+ ' <div class="col-xs-3 bs-wizard-step complete"><!-- complete -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 4</div>'
								+ '<div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ ' </div>'
								+ ' <div class="col-xs-3 bs-wizard-step complete"><!-- active -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 5</div>'
								+ ' <div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ '</div>'
								+ ' <div class="col-xs-3 bs-wizard-step active"><!-- complete -->'
								+ ' <div class="text-center bs-wizard-stepnum">Step 6</div>'
								+ '<div class="progress"><div class="progress-bar"></div></div>'
								+ ' <a href="#" class="bs-wizard-dot"></a>'
								+ '  <div class="bs-wizard-info text-center"></div>'
								+ '</div>' + '</div>',
						restrict : 'E',
						link : function postLink(scope, element, attrs) {
							element.text();
						}
					}
				});
;