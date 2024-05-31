// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 500);
document.getElementById('room-container').appendChild(renderer.domElement);

// Create a room (100x100x100)
const roomSize = 100;
const roomGeometry = new THREE.BoxGeometry(roomSize, roomSize, roomSize);
const roomMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const room = new THREE.Mesh(roomGeometry, roomMaterial);
scene.add(room);

// Create an object
const objectGeometry = new THREE.BoxGeometry(10, 10, 10);
const objectMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const object = new THREE.Mesh(objectGeometry, objectMaterial);
scene.add(object);

// Set initial positions
object.position.set(0, 0, 0);
camera.position.set(0, 100, 200);
camera.lookAt(0, 0, 0);

// Movement controls
const moveStep = 2;

document.getElementById('left').addEventListener('click', () => {
    object.position.x -= moveStep;
    render();
});

document.getElementById('right').addEventListener('click', () => {
    object.position.x += moveStep;
    render();
});

document.getElementById('up').addEventListener('click', () => {
    object.position.y += moveStep;
    render();
});

document.getElementById('down').addEventListener('click', () => {
    object.position.y -= moveStep;
    render();
});

document.getElementById('forward').addEventListener('click', () => {
    object.position.z -= moveStep;
    render();
});

document.getElementById('backward').addEventListener('click', () => {
    object.position.z += moveStep;
    render();
});

// Render the scene
function render() {
    renderer.render(scene, camera);
}

render();
