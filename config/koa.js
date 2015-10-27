var app = require('koa')()
    ,consign = require('consign')
    ,router = require('koa-router')
    ,serve = require('koa-static')
    ,bodyParser = require('koa-bodyparser');

app.use(serve('public'));
app.use(bodyParser());

consign({cwd: 'app'})
  .then('models')
  .then('api')
  .then('routes')
  .into(app);

module.exports = app;


