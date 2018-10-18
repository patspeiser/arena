export default class Arena {
	constructor(){
		this.WIDTH = 1000;
		this.HEIGHT = 800;
		this.container;
		this.scene;
		this.camera;
		this.light;
		this.controls;
		this.instructions;
		this.renderer;
		this.window = window;

		//bad spot
		this.prevTime 		= performance.now();
		this.direction 		= new THREE.Vector3();
		this.velocity = new THREE.Vector3();
		this.moveBackward 	= false;
		this.moveForward 	= false;
		this.moveLeft 		= false;
		this.moveRight 		= false;
		this.canJump        = false;
	};
	setScene(){
		//add the camera
		this.scene 		= new THREE.Scene();
		this.container 	= this.initContainer();
		this.light 		= this.initLight();
		this.camera 	= this.initCamera();
		this.renderer 	= this.initRenderer();
		this.cube       = this.initCubeOfDreams();
		this.controls   = this.initControls();
		this.scene.add(this.camera);
		this.scene.add(this.light);
		this.scene.add(this.cube);
		if(this.container){
			this.container.appendChild(this.renderer.domElement);
		};
		return this.scene;
	};	
	addElementsToScene(elements){
		this.elements = elements;
		if(this.elements){
			for(let i = 0; i<this.elements.length; i++){
				this.scene.add(this.elements[i]);
			}
		}
		return this.scene;
	};
	initContainer(){
		this.container = document.getElementById('arena');
		return this.container;
	};
	initRenderer(){
		console.log(this.camera);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( this.window.innerWidth, this.window.innerHeight );
		return this.renderer;
	};
	initCamera(){
		// Set some camera attributes.
		this.VIEW_ANGLE = 45;
		this.ASPECT = this.WIDTH / this.HEIGHT;
		this.NEAR = 0.1;
		this.FAR = 10000;
		this.camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR);
		this.camera.position.set(0, 20, 100);
		return this.camera;
	};
	initLight(){
		this.light = new THREE.Light({intensity: 1});
		return this.light;	
	};
	initCubeOfDreams(){
		this.shape 		= new THREE.BoxGeometry(1,1,1);
		this.material 	= new THREE.MeshBasicMaterial({color: 0xff00f0 });
		this.cube 		= new THREE.Mesh(this.shape, this.material);
		return this.cube;	
	};
	rotateCubeOfDreams(){
		this.cube.rotation.x += .01;
		this.cube.rotation.y += .01;
		this.cube.rotation.z += .01;
	};
	initControls(){
		this.instructions 	= document.getElementById('instructions');
		this.arena          = document.getElementById('arena');
		this.controls 		= new THREE.PointerLockControls(this.camera);
		
		//gotta abstract out and return to display block again
		document.addEventListener('pointerlockchange', (event)=>{
			this.instructions.style.display = 'none';
		});
		this.instructions.addEventListener( 'click', (event)=>{
			this.arena.requestPointerLock();
		}, false );
		
		this.onKeyDown = function ( event ) {
			switch ( event.keyCode ) {
				case 38: // up
				case 87: // w
					this.moveForward 	= true;
					break;
				case 37: // left
				case 65: // a
					this.moveLeft 	 	= true; 
					break;
				case 40: // down
				case 83: // s
					this.moveBackward 	= true;
					break;
				case 39: // right
				case 68: // d
					this.moveRight 		= true;
					break;
				case 32: // space
					if ( this.canJump === true ) this.velocity.y += 350;
					this.canJump = false;
					break;
			}
		};
		this.onKeyUp = function ( event ) {
			switch( event.keyCode ) {
				case 38: // up
				case 87: // w
					this.moveForward = false;
					break;
				case 37: // left
				case 65: // a
					this.moveLeft = false;
					break;
				case 40: // down
				case 83: // s
					this.moveBackward = false;
					break;
				case 39: // right
				case 68: // d
					this.moveRight = false;
					break;
			}
		};
		document.addEventListener( 'keydown', this.onKeyDown, false );
		document.addEventListener( 'keyup',   this.onKeyUp,   false );
		this.scene.add(this.controls.getObject());
		return this.controls;
	};
	
};
