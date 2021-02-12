function randInt(min, max) {
  return Math.random() * (max - min) + min;
}


var boxSize = 100;

function setup() {
  
  createCanvas(400, 400);
  
  for (var i = 0; i < 400; i += boxSize) {
    for (var j = 0; j < 400; j += boxSize) {
        fill(randInt(0, 255), randInt(0, 255), randInt(0, 255));
        rect(i, j, boxSize, boxSize);
    }
}
}
var x = 0;
var y = 0;
var draw= function() {
    x = floor(mouseX/boxSize) * boxSize;
    y = floor(mouseY/boxSize) * boxSize;
    fill(randInt(0, 255), randInt(0, 255), randInt(0, 255));
    rect(x, y, boxSize, boxSize);
    
};
