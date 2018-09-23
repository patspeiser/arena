const assert  = require('assert');
const http    = require('http');

describe("Server", ()=>{
	let server = require('../server');
	
	describe('/', ()=>{
		it('should get 200', (done)=>{
			http.get('http://localhost:3000/', (res)=>{
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});
});

module.exports = {};

