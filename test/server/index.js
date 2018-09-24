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
	describe('/test', ()=>{
		it('should get 200', (done)=>{
			http.get('http://localhost:3000/test', (res)=>{
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});
	describe('all others', ()=>{
		it('should get 404', (done)=>{
			http.get('http://localhost:3000/' + Date.now(), (res)=>{
				assert.equal(404, res.statusCode);
				done();
			});
		});
		it('should get 404', (done)=>{
			http.get('http://localhost:3000/madeupUrl', (res)=>{
				assert.equal(404, res.statusCode);
				done();
			});
		});
	});
});

module.exports = {};

