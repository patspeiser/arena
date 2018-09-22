const path = require('path');
const http = require('http');
const fs   = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer( (req, res)=>{
	let filePath = path.join(__dirname, 'index.html');
	fs.exists(filePath, (exists)=>{
		if(!exists){
			res.statusCode = 404;
			res.end('file ', filePath, ' not found.');
		};

		fs.readFile(filePath,  (err, data)=>{
			console.log(data);
			if(err){
				res.statusCode = 500;
				res.send('Internal server error.');
			} else {
				res.statusCode = 200;
				res.end(data);
			};
		})
	})
}).listen(port, ()=>{
	console.log('...listening on ', port);
});


