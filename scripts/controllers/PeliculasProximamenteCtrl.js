angular
.module("miApp")
.controller("PeliculasProximamenteCtrl",["$scope","$filter","Peliculas","$location",
function($scope,$filter, Peliculas,$location){

$scope.peliculas = $filter("orderBy")(Peliculas.data.results,"release_date");

$scope.verDetalle = function( id ){

	$location.path("/peliculas/detalles").search({

		idPelicula: id
	});

};

}]);

