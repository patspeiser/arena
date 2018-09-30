import Arena from './arena';
var arena = new Arena()
arena.setScene()

function animate(){
	arena.window.requestAnimationFrame(animate);
	arena.rotateCubeOfDreams();
	arena.renderer.render(arena.scene, arena.camera);
}

animate();