let name;
var canvas;
function preload() {
  name = loadModel('3Dmodels/name.obj');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1')
  
}

function draw() {
  background(0);

  scale(3);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * -0.02);
  rotateZ(frameCount * 0.01);  


  ambientLight(60);

  // add point light to showcase specular material
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  //pointLight(255, 255, 255, locX, locY, 50);
  
  normalMaterial();
  //fill(255,192,203);
  noStroke();
  model(name);
  //const dirY = (mouseY / height - 0.5) * 4;
  //const dirX = (mouseX / width - 0.5) * 4;
  //directionalLight(255, 255, 255, dirX, dirY, 1);

}