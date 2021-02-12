
function setup() {
  
  createCanvas(400, 400);

}
var back = 100;
var direction = 0.1;

var draw = function() {
  
    background(100-back, back, 100);  
    back -= direction;
    
    
    if (back < 0 || back > 100) {
        direction = -direction;
    }
        
};
