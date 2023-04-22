import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const params = {
   color: '#343131'
};

const scene = new THREE.Scene();
scene.background = new THREE.Color( params.color );

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {

   requestAnimationFrame(animate);

   cube.rotation.x += 0.01;
   cube.rotation.y += 0.01;

   renderer.render(scene, camera);

}

animate();