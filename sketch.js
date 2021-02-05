function setup() {
  
  createCanvas(600, 300);
  
}

function draw() {
  background(mouseX, mouseY, 0);
  noFill();
  stroke(255);
  strokeWeight(5);
  if (random(600) < mouseX/2) {
    ellipse(random(width), random(height), 40, 40);
  }
}
