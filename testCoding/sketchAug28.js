function setup(){

    createCanvas(windowWidth,windowHeight);

}

function draw(){

    if(mouseIsPressed){
        fill(225);
        ellipse(mouseX,mouseY,80,80);
    } else {
        fill(0);
    }

}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

}