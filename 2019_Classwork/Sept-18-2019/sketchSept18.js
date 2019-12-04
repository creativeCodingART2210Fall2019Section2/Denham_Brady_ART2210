var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.1;

function setup(){

    //windowWidth = 1280
    //windowHeight = 660
    createCanvas(windowWidth,windowHeight);

}

function draw(){

    var targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseY;
    y += (targetY - y) * easing;
    var weight = dist(x,y,px,py);
    strokeWeight(weight);
    quad(x,y,px,py);
    py = y;
    px = x;
    stroke(0,mouseX,mouseY);

    if (mouseIsPressed){
        if(mouseButton == LEFT){
            stroke(mouseX,mouseY,0);
        }
    else{
        stroke(mouseY,0,mouseX);
    }
    }
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
