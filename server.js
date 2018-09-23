const path = require('path');
const app  = require('./app');
const http = require('http');
const fs   = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer(app).listen(port,  ()=>{
	console.log('...listening on ', port);
});

module.exports = server;