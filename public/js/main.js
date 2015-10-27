angular.module('minhaApp', ['ngRoute', 'meusServicos', 'meusComponentes'])
	.config(function($routeProvider) {

		$routeProvider.when('/eventos', {
			templateUrl: 'partials/eventos.html',
			controller: 'EventosController'
		});

		$routeProvider.when('/sobre', {
			templateUrl: 'partials/sobre.html',
		});


		$routeProvider.otherwise({redirectTo: '/eventos'});
	});