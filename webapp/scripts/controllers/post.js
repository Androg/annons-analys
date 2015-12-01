angular.module('annons-analys')
	.controller('PostCtrl', [ '$scope', '$http', '$location', function ($scope, $http, $location){
		
		 $scope.Title = null ;

		
		
		    $scope.getTitle = function(){
		        $scope.get = $scope.h1;
		        var documentResult = document.getElementById("title")[0].innerHTML;
		        console.log('document.getElementById: ', documentResult);
		        $scope.value = documentResult.toString();
		      };

	    

	
}]);