const path    = require('path');
const express = require('express');
const app     = express();

app.use(express.static('node_modules'));
app.use(express.static('dist'));

app.get('/', (err, res, next)=>{
	res.sendFile('index.html', {root: './'});
});

app.get('/test', (err, res, next)=>{
	res.sendFile('test.html', {root: './'});
});
module.exports = app;