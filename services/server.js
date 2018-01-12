// dependencies
var Koa    = require('koa');
var static = require('koa-static');
var path   = require('path');
var config = require('../config.json');

// vars
var app    = new Koa;
var port   = config.port;

// paths
var folder = path.resolve(__dirname, '..', config.folder);

app
  // Middlewares
  .use(static(folder))
  // Port
  .listen(port);

console.log('\n  King Of App server is ready\n\x1b[36m    http://localhost:' + port + '\n');
