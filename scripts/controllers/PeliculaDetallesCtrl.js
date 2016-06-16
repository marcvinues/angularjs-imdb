angular.module("miApp").controller("PeliculaDetallesCtrl",["$scope", "Pelicula","ApiService",function($scope,Pelicula,ApiService){

$scope.pelicula = Pelicula.data;

$scope.rutaImagen = function( ruta ){

		return ApiService.obtenerRutaImagen( 150, ruta);
};

}]);