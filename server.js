"use strict";

const path = require('path');
const app  = require('./app');
const http = require('http');
const fs   = require('fs');
const port = process.env.PORT || 3000;

const server = function(){
	return new Promise( (resolve, reject)=>{
		resolve(http.createServer(app).listen(port,  ()=>{
			console.log('...listening on ', port);
		}));
		reject('nah');
	});
};

module.exports = server;

server()
.then( (server)=>{
			//	
		});
