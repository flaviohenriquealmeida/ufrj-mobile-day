angular.module('meusServicos', ['ngResource'])
	.factory('recursoEventos', function($resource) {
		return $resource('/eventos');
	});