angular.module('minhaApp').controller('EventosController', function($scope, recursoEventos) {

/*
	$scope.eventos = [

		{
			nome: 'Chá de Panela'
		},
				{
			nome: 'Chá de Fralda'
		},
				{
			nome: 'Chá de Boldo'
		}
	];
*/

	$scope.evento = {};
	$scope.eventos = [];

/*
	$http.get('/eventos').then(function(retorno) {
		$scope.eventos = retorno.data;
	});
*/

	recursoEventos.query(function(eventos) {
		$scope.eventos = eventos;
	}, function(erro) {
		console.log('Problemas! ');
		console.log(erro);
	});

	$scope.remover = function(evento) {
		var indice = $scope.eventos.indexOf(evento);
		$scope.eventos.splice(indice,1);
	};

	$scope.cadastrar = function() {
		$scope.eventos.push($scope.evento);
		$scope.evento = {};
	};
});