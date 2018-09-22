const server = require('./server');
const client = require('./client');

const tests =  [
	server,
	client
	//..
]

function runSuite(tests){
	this.tests = tests;
	for (let i = 0; i < this.tests.length; i++){
		this.test = this.tests[i];
		try {
			console.log('in try');
			this.test.run();
		} catch (e){
			console.log('error', e);
		}
	}
}

module.exports = {};

runSuite(tests);