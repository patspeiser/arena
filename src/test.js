class Test {
	constructor(){
		mocha.setup({
			ui: 'tdd'
		});
		mocha.run();
	};
};

export default Test;