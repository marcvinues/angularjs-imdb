angular.module("miApp").controller("SeriesHoyCtrl",["$scope","ApiService",function($scope, ApiService){

ApiService.consultaApiSeries("tv/airing_today")
	.then(
			function( resultado ){
				$scope.series = resultado.data.results;
			},
			function(){
				
				alert("FAIL");
			}

		);

}]);


