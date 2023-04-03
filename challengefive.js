let vacHeight, vacWidth, vacX, vacY;
let spriteX, spriteY;
let mousePressedLastFrame = false;

function setup() {
  vacHeight = 50;
  vacWidth = 50;
  vacX = 0;
  vacY = 50;
  createCanvas(400, 400);
}

function draw() {
  background("tan");
  addVac(vacX, vacY);
  if (mouseIsPressed && !mousePressedLastFrame) { // if mouse was just pressed
    spriteX = random(width);
    spriteY = height;
  }
  drawSprite();
  if (spriteY <= -vacHeight) { // if sprite is off-screen, reset it
    spriteY = height;
  }
  mousePressedLastFrame = mouseIsPressed;
}

function addVac(x, y) {
  push();
  translate(mouseX-10, y);
  noStroke();
  if (mouseIsPressed) {
    fill("red");
    rect(0, 0, 0, 40);
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

// dirt sprite
function drawSprite() {
  if (spriteY > 0) { // only draw sprite if it's on-screen
    push();
    translate(spriteX, spriteY);
    fill("brown");
    rect(0, 0, 10, 10);
    pop();
    spriteY -= 10; // move sprite up
  }
}
