var http = require('http')
    ,app = require('./config/koa');

require('./config/database')('localhost/confirma');

http.createServer(app.callback())
.listen(3000, function() {
    console.log('Servidor estutando na porta: ' 
        + this.address().port);
});

