module.exports = function(app) {

	var ctrl = {};

	ctrl.retornaIndex = function *() {
		yield this.render('index');
	};	

	return ctrl;
};