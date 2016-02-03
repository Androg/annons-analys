'use strict';

angular.module('annons-analys').controller(
		'MainCtrl',
		[
                '$scope',
				'$http',
				'$location',
				'localStorageService',
				'myFactory',
				function($scope, $http, $location, localStorageService,
						myFactory) {

					$scope.url = {};

                        $scope.validateURL = function(textval) {
                        var urlregex = /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;

                        if(urlregex.test(textval) === true) {
                            $location.path('post');
                            myFactory.addUrl($scope.url).then(function(data) {
                                $scope.postades = data.status;
                            });
                            localStorageService.set('url', $scope.url.url);
                        } else {
                            document.getElementById("invalidUrl").className = "ng-show";
                        }

                    };

                    $scope.createDoc = function() {

                        var loadFile=function(url,callback){
                            JSZipUtils.getBinaryContent(url,callback);
                        };
                        loadFile('../documents/TheShow.docx' ,function(err,content){
                            var doc=new Docxgen(content);

                            doc.setData( {"first_name": 'bajset',
                                    "last_name": 'matadoren'
                                }
                            ); //set the templateVariables
                            doc.render(); //apply them (replace all occurences of {first_name} by Hipp, ...)
                            var out=doc.getZip().generate({type:"blob"}); //Output the document using Data-URI
                            saveAs(out,"output.docx")
                        })
                    }



				} ]);
