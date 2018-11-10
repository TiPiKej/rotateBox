let zoom = -300;
let x = 0;
let y = 0;
let mxP = 0;
let myP = 0;
let rX = 0;
let rY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  document.querySelectorAll("canvas").forEach(can => {
    can.addEventListener("contextmenu", e => e.preventDefault());
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);

  camera(0, 0, zoom, x, y, 0, 0, 1, 0);
  rotateX(rX);
  rotateY(rY);
  ambientLight(30);
  pointLight(255, 255, 0, 300, 100, 0);
  specularMaterial(250);
  torus(80, 20, 64, 64);
}

function mouseWheel(ev) {
  zoom -= ev.delta;
}

function mousePressed() {
  mxP = mouseX;
  myP = mouseY;
}

function mouseDragged() {
  // console.log(mouseButton);

  if (mouseButton === "left") {
    x += mouseX - mxP;
    y -= mouseY - myP;
  } else if (mouseButton === "right") {
    rX += (mouseY - myP) * 0.025;
    rY += (mouseX - mxP) * 0.025;
  }
  mxP = mouseX;
  myP = mouseY;
}
