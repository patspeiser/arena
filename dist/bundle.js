/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arena__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var arena = new _arena__WEBPACK_IMPORTED_MODULE_0__["default"]()
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arena; });
class Arena {
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


/***/ })
/******/ ]);