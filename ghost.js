function randInt(min, max) {
  return Math.random() * (max - min) + min;
}

function setup() {
  
  createCanvas(400, 400);
  
}
var wave = 0;
var speed = 0.5;

function draw() {
    background(0);
    fill(255);
    rect(125, 30, 150, 350, 80);
    fill(0);
    ellipse(170, 100, 30, 30);
    ellipse(230, 100, 30, 30);
    
    for (var i = 0; i < 4; i++) {
        if (i % 2 === 0) {
            ellipse(150 + i * 35, 360 + sin(wave/5)*4, 60, 60);
        } else {
            ellipse(150 + i * 35, 360 + cos(wave/5)*4, 60, 60);
        }
    }
    
    arc(200, 150, 30, 10, 0,3.1);
    fill(255);
    triangle(125, 155, 60, 235, 125, 200);
    triangle(275, 155, 340, 235, 275, 200);
    wave += speed;
    wave+=0.1;
};