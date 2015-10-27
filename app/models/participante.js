var mongoose = require('mongoose');
var nomeModel = 'Participante';

var esquema = mongoose.Schema({
	nome: { 
	  type: String, 
	  required: true
	},
	confimado: {
		type: Boolean,
		default: false
	}
});

mongoose.model(nomeModel, esquema);

module.exports = mongoose.model(nomeModel);

