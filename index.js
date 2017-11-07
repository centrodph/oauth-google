const express = require('express');
const http = require('http');
const routes = require('./routes');

//config
const app = new express();

//routes
routes(app);
//createServer
const port = process.env.PORT || 3090;
http.createServer(app).listen(port);
console.log('Listen ' + port);
