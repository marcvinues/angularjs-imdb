angular.module("miApp").controller("PeliculasCarteleraCtrl",["$scope","Peliculas","$location", function($scope,Peliculas,$location){


	$scope.peliculas = Peliculas.data.results;

	$scope.verDetalle = function( id ){

	$location.path("/peliculas/detalles").search({

		idPelicula: id
	});
};

}]);

