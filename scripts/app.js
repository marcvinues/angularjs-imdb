angular.module("miApp",["ngRoute","route-segment","view-segment"]);

angular.module("miApp").config(["$routeSegmentProvider","$routeProvider",function($routeSegmentProvider,$routeProvider){

	$routeSegmentProvider.when("/peliculas","peliculas");
	$routeSegmentProvider.when("/peliculas/proximamente","peliculas.proximamente");
	$routeSegmentProvider.when("/peliculas/cartelera","peliculas.cartelera");
	$routeSegmentProvider.when("/peliculas/detalles","peliculas.detalles");
	$routeSegmentProvider.when("/series","series");
	$routeSegmentProvider.when("/series/hoy","series.hoy");
	$routeSegmentProvider.when("/series/emision","series.emision");

	// redirige a la pagina que le digamos
	$routeProvider.otherwise({ redirectTo: '/peliculas/proximamente' });

	$routeSegmentProvider.segment("peliculas",{
		controller:"PeliculasCtrl",
		templateUrl:"views/Peliculas.html"
	});

	$routeSegmentProvider.within("peliculas").segment("proximamente",{
		controller:"PeliculasProximamenteCtrl",
		templateUrl:"views/PeliculasProximamente.html",
		resolve: {
			Peliculas: ["ApiService",function(ApiService){
			return ApiService.consultaApi("movie/upcoming");
			}]
		}
	});

	$routeSegmentProvider.within("peliculas").segment("cartelera",{
		controller:"PeliculasCarteleraCtrl",
		templateUrl:"views/PeliculasCartelera.html",
		resolve: {
			Peliculas: ["ApiService",function(ApiService){
			return ApiService.consultaApi("movie/now_playing");
			}]
		}
	});

	$routeSegmentProvider.within("peliculas").segment("detalles",{
		controller:"PeliculaDetallesCtrl",
		templateUrl:"views/PeliculaDetalles.html",
		resolve: {
			Pelicula: ["ApiService","$routeParams",function(ApiService,$routeParams){

				return ApiService.consultaApi("movie/" + $routeParams.idPelicula);
			}]
		}

	});

	$routeSegmentProvider.segment("series",{
		controller:"SeriesCtrl",
		templateUrl:"views/Series.html"
	});

	$routeSegmentProvider.within("series").segment("hoy",{
		controller:"SeriesHoyCtrl",
		templateUrl:"views/SeriesHoy.html"
	});

	$routeSegmentProvider.within("series").segment("emision",{
		controller:"SeriesEmisionCtrl",
		templateUrl:"views/SeriesEmision.html"
	});

}]);