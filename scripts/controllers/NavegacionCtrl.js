angular.module("miApp").controller("NavegacionCtrl",["$scope","$routeSegment",function($scope, $routeSegment){

	//codigo

	$scope.rutaEsPeliculas = function(){

		//devuelve la comprobacion de la ruta
		return $routeSegment.startsWith("peliculas");

	};

	$scope.rutaEsSeries = function(){

		return $routeSegment.startsWith("series");
	};

}]);