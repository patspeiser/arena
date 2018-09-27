import Arena from '../build/arena';
import * as assert from 'assert';
class Test {
	constructor(){};
	run(){
		describe('Arena', ()=>{
			var arena;
			beforeEach( ()=>{
				arena = new Arena();
			});	
			it('should be defined', ()=>{
				assert(typeof Arena !== 'undefined');
			});
			it('should construct Arena object', ()=>{
				assert(arena instanceof(Arena));
			});
			it('should setScene', ()=>{
				console.log('setScene', arena.setScene());
				//assert(arena.setScene() === 'defined')
			});
		});
	}
};

const test = new Test();
test.run();
