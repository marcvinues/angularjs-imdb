angular.module("miApp").controller("SeriesEmisionCtrl",["$scope","ApiService",function($scope, ApiService){


	ApiService.consultaApiSeries("tv/popular")
	.then(
			function( resultado ){
				$scope.series = resultado.data.results;
			},
			function(){
				
				alert("FAIL");
			}

		);

}]);