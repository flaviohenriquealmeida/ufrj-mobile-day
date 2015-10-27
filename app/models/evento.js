var mongoose = require('mongoose');
var nomeModel = 'Evento';

var esquema = mongoose.Schema({
	nome: { 
	  type: String, 
	  required: true
	}, 
	data: {
	  type: Date, 
	  required: true
	}
});

mongoose.model(nomeModel, esquema);

module.exports = mongoose.model(nomeModel);