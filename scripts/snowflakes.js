function setup() {
  
  createCanvas(400, 400);
  
}

function randInt(min, max) {
  return Math.random() * (max - min) + min;
}

class Snowflake {
    constructor() {
      this.x = randInt(0, 400);
      this.y = randInt(-800, -50);
      this.r = 0;
      this.numOfSpokes = 6;
      this.scale = randInt(0, 0.5);
    }
  
    drawSpoke() {
        strokeWeight(10);
        line(0, 5, 0, 120);
        strokeWeight(8);
        line(0, 23, 17, 32);
        line(0, 23, -17, 32);
        line(0, 48, 21, 76);
        line(0, 48, -21, 76);
        strokeWeight(6);
        line(0, 80, 12, 106);
        line(0, 80, -12, 106);
    };
    
    rotate() {
       for (var spokes = 0; spokes < this.numOfSpokes; spokes++) {
            this.drawSpoke();
            rotate(45);
        }  
    };
    
    draw() {
      translate(this.x, this.y);  
      rotate(this.r);
      scale(this.scale);
      this.rotate();
      this.r+= 0.1;
      this.y++;
      resetMatrix();
        
    };
    
};

var flakes = [];

for (var i = 0; i < 50; i++) {
    flakes.push(new Snowflake());
}

function drawSetup() {
    background(255, 255, 255);
    stroke(89, 184, 235); 
};

function draw() {
    drawSetup();
    
    for (var i = 0; i < flakes.length; i++) {
        flakes[i].draw();
        
        if (flakes[i].y > 450) {
            flakes[i].y = randInt(-800, -50);
        } 
    }
    
    
};
