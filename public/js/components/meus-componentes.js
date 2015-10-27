angular.module('meusComponentes',[])
	.directive('meuBotao', function() {

		var ddo = {};

		ddo.restrict = "EA";
		
		ddo.scope = {
			acao: '&',
			titulo: '@'
		};

		ddo.template = '<input type="submit" class="btn btn-primary" value="{{titulo}}" ng-click="acao()">';

		return ddo;
	});