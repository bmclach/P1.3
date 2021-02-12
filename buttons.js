function randInt(min, max) {
  return Math.random() * (max - min) + min;
}

var colour = [255, 255, 255];
var buttonFill = [0, 0, 255];

var xPos = 200;
var yPos = 200;

function setScene() {
    background(colour[0], colour[1], colour[2]);
    fill(buttonFill[0], buttonFill[1], buttonFill[2]);
    ellipse(xPos, yPos, 100, 100);
    
    fill(255, 0, 0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Click Here", xPos, yPos);
    
    fill(255, 0, 0);
    rect(20, 20, 130, 60);
    
    fill(0, 255, 0);
    text("Click Me", 85, 50);
    
    triangle(310, 20, 260, 100, 360, 100);
    fill(0, 0, 255);
    text("No Me", 310, 80);
};

function setup() {
  
  createCanvas(400, 400);
  setScene();
  
}

function mouseClicked() {
 
    if (mouseX > 20 && mouseX < 150 && mouseY > 20 && mouseY < 80) {
        
        background(colour[0], colour[1], colour[2]);
        xPos = randInt(100, 300);
        yPos = randInt(100, 300);
        
    }
    
    if ( dist(xPos, yPos, mouseX, mouseY) < 100) {
        colour[0] = randInt(0, 255);
        colour[1] = randInt(0, 255);
        colour[2] = randInt(0, 255);
        
    }
   
    if (mouseY > 20 && mouseY < 100 && (mouseY > -8/5 * mouseX + 516) && (mouseY > 8/5 * mouseX - 476)) {
        buttonFill[0] = randInt(0, 255);
        buttonFill[1] = randInt(0, 255) 
        buttonFill[2] = randInt(0, 255);
        
    }
    setScene(); 
};


