var router = require('koa-router')();
var passport = require('passport');

module.exports = function(app) {

  var ctrl = app.api.evento;

  router.post('/profile', passport.authenticate('jwt', { session: false}),
  	function(req, res) {
  		res.send(req.user.profile);
  	}
  );

  router.get( '/eventos', ctrl.listaTodos);
  router.post('/eventos', ctrl.adiciona);
  router.put( '/eventos', ctrl.altera);
  router.get('/eventos/:id', ctrl.buscaPorId);
  router.delete('/eventos/:id', ctrl.remove);

  app.use(router.routes());
};
