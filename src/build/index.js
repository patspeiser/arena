import Arena from './arena';
var arena = new Arena()
arena.setScene()

function animate(){
	var time = performance.now();
	arena.velocity.x -= arena.velocity.x * 10.0 * arena.delta;
	arena.velocity.z -= arena.velocity.z * 10.0 * arena.delta;
	arena.velocity.y -= 9.8 * 100.0 * arena.delta;
	arena.direction.z = Number( arena.moveForward ) - Number( arena.moveBackward );
	arena.direction.x = Number( arena.moveLeft ) - Number( arena.moveRight );
	arena.direction.normalize();

	if ( arena.moveForward || arena.moveBackward ) arena.velocity.z -= arena.direction.z * 400.0 * arena.delta;
	if ( arena.moveLeft || arena.moveRight ) arena.velocity.x -= arena.direction.x * 400.0 * arena.delta;

	arena.window.requestAnimationFrame(animate);
	arena.rotateCubeOfDreams();
	arena.controls.getObject().translateX( arena.velocity.x * arena.delta );
	arena.controls.getObject().translateY( arena.velocity.y * arena.delta );
	arena.controls.getObject().translateZ( arena.velocity.z * arena.delta );
	arena.prevTime = time;
	arena.renderer.render(arena.scene, arena.camera);
}

animate();