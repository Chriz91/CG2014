var scene;
var camera;
var renderer;
var cube;
var OffsetX = 0;
var OffsetY = -10;
var light;
var field;


function update()
{
  render();
}


function render()
{
  requestAnimationFrame(render);
  renderer.render(scene, camera);
 
}


function resize()
{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}


function init() {
  var w = window.innerWidth;
  var h = window.innerHeight;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();

  light = new THREE.PointLight(0xffffff);

  // Graph erzeugen
  field = new Field(10, 20);

  game();
  
  light.position.x = 5;
  light.position.y = 5;
  light.position.z = 0;

  camera.position.x = 5;
  camera.position.z = 18;

  scene.add(light);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  update();
}
