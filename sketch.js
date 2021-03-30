function setup() {
  
  var title = createCanvas(600, 100);
  title.parent("title");
}

function draw() {
  textAlign(CENTER, CENTER);
  colorMode(RGB, 600, 100, 255);
  background(mouseX, mouseY, 0);
  noFill();
  stroke(255);
  strokeWeight(5);
  if (random(600) < mouseX/2) {
    ellipse(random(width), random(height), 40, 40);
  }
  fill(22, 43, 11);
  strokeWeight(2);
  textSize(50);
  text("All About Droogan", 300, 50);
}
