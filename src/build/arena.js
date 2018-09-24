export default class Arena {
	constructor(){console.log('arena constructor')};
	setScene(){
		// Set the scene size.
		const WIDTH = 400;
		const HEIGHT = 300;

		// Set some camera attributes.
		const VIEW_ANGLE = 45;
		const ASPECT = WIDTH / HEIGHT;
		const NEAR = 0.1;
		const FAR = 10000;
		const container = document.body;
		// Create a WebGL renderer, camera
		// and a scene
		const renderer = new THREE.WebGLRenderer();
		const camera =
		new THREE.PerspectiveCamera(
			VIEW_ANGLE,
			ASPECT,
			NEAR,
			FAR
		);

		const scene = new THREE.Scene();

		// Add the camera to the scene.
		scene.add(camera);

		// Start the renderer.
		renderer.setSize(WIDTH, HEIGHT);

		// Attach the renderer-supplied
		// DOM element.
		container.appendChild(renderer.domElement);
	}
};
