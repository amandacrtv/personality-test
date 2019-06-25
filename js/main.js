
//Toxiclibs Polygon2D class helper
const Polygon2D = toxi.geom.Polygon2D;

//floor square width
const tile_w = 77/2;

//floor square height
const tile_h = 38;

//complete floor height
const floor_h = 50;

//position
let x, y, offsetX, offsetY;
let p = createVector(0, 0);

//font
let font;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}