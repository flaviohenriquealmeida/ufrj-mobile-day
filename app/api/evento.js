module.exports = function(app) {

	var ctrl = {};
	var Evento = app.models.evento;

	ctrl.adiciona = function *() {
		try {
			var evento = yield Evento.create(this.body);
			this.status = 201;
			this.body = { id : evento._id};	
		} catch(erro) {
			this.status = 500;
			this.body = erro;
		}
	};


	ctrl.altera = function *() {

	};

	ctrl.listaTodos = function *() {
		var eventos = [
		{
			nome: 'Single Page Aplication com Angular',
			palestrante: 'Flávio Almeida'
		},
		{
			nome: 'MEAN, Fullstack JavaScript',
			palestrante: 'Almeida Flávio'

		},
		{
			nome: 'Como dormir acordado',
			palestrante: 'Zé do Sono'

		}]

		this.status = 200;
		this.body = eventos;
	};

	ctrl.buscaPorId = function *() {

	};

	ctrl.remove = function * () {

	};

	return ctrl;
};