let vacHeight, vacWidth, vacX, vacY;
let spriteX, spriteY;

function setup() {
  vacHeight = 50;
  vacWidth = 50;
  vacX = 0;
  vacY = 50;
  spriteX = random(width);
  spriteY = height;
  createCanvas(400, 400);
}

function draw() {
  background("tan");
  addVac(vacX, vacY);
  drawSprite();
  spriteY -= 20; // move sprite up
  if (spriteY < -vacHeight) { // if sprite is off-screen, reset it
    spriteX = random(width);
    spriteY = height;
  }
}

function addVac(x, y) {
  push();
  translate(mouseX-10, y);
  noStroke();
  if (mouseIsPressed) {
    fill("red");
    rect(0, 0, 20, 40);
  } else {
    fill("darkblue");
    rect(0, 0, 20, 40);
  }
  beginShape();
  fill("grey");
  vertex(0, 40);
  vertex(20, 40);
  vertex(50, 70);
  vertex(-30, 70);
  endShape(CLOSE);
  pop();
}
//dirt sprite
function drawSprite() {
  push();
  translate(spriteX, spriteY);
  fill("brown");
  rect(0, 0, 10, 10);
  pop();
}
