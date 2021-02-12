function randInt(min, max) {
  return Math.random() * (max - min) + min;
}

function setup() {
  
  createCanvas(400, 400);
  
}
var data = [];

var counter = 0;
var sorted = 0;

for (var i = 0; i < 15; i++) {
    
  data.push(randInt(20, 300));  
    
}

function drawLines() {
    
  stroke(0);
  strokeWeight(10);
  
  for (var i = 0; i < data.length; i++) {
      if (i === counter || i === counter + 1) {
          stroke(255, 0, 0);
      } else {
          stroke(0);
      }
      line(25 * (i + 1), data[i], 25 * (i + 1), 405);
  }
    
};

function bubble() {
    
    if (counter >= data.length) {
        counter = 0;
        sorted = 0;
    }
    
    if (data[counter] < data[counter + 1]) {
        data[counter + 1] += data[counter];
        data[counter] = data[counter + 1] - data[counter];
        data[counter + 1] -= data[counter];
        sorted = 0;
    } else {
        sorted++;
    }
    
    counter++;
    
};

function draw() {
    background(255);
  drawLines();  
  if (sorted !== data.length) {
      bubble();
  } else {
      textSize(30);
      fill(255, 0, 0);
      text("Done!", 50, 50);
  }
    
};

function mouseClicked() {
    data = [];
    counter = 0; 
    sorted = 0;
    
    for (var i = 0; i < 15; i++) {
    
    data.push(randInt(20, 300));  
    
    }
    
};
