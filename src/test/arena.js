import Arena from '../build/arena';
import * as assert from 'assert';

describe('Arena', ()=>{
	var arena = new Arena();
	it('should be defined', ()=>{
		assert(typeof Arena !== 'undefined');
	});
	it('should construct arena object', ()=>{
		var arena = new Arena();
		assert(arena instanceof(Arena));
	});
})