// This sketch adds a vac sprite to the canvas.
function setup() {
  // The following constants don't change, but they are convenient
  // to set as variables because they are used throughout some programs.
  vacHeight = 50; // This is an approximation that depends on scale.
  vacWidth = 50; // This is an approximation that depends on scale.
  // These are the starting values of variables that may change.
  vacX = 0;
  vacY = 50;
  // Set up the canvas.
  createCanvas(400, 400);

}

function draw() {
  // Draw the background.
  background("tan");
  // Draw Vac
  addVac(vacX, vacY);
}

function addVac(x, y) {
  push();
  translate(mouseX-10, y); // Move the vac to the position requested.
  // Draw the bag.
  noStroke();
  
  if (mouseIsPressed) {
  fill("red");
  rect(0, 0, 20, 40);
  }
else {
  fill("darkblue");
  rect(0, 0, 20, 40);
}
  // Draw the attachment
  beginShape();
  fill("grey");
  vertex(0, 40);
  vertex(20, 40);
  vertex(50, 70);
  vertex(-30, 70);
  endShape(CLOSE);

  pop();
}
  
  

  
