angular.module("miApp").filter("fechaEstreno", function(){

	return function( datoEntrada ){
		return "Se estrena en: " + datoEntrada;
	};

});