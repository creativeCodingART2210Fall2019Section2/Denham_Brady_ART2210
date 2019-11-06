function setup(){

    //windowWidth = 2560
    //windowHeight = 822
    createCanvas(windowWidth,windowHeight);
    //background(204);
}

function draw(){

    let x1 = map(mouseX, 0, width, 0, 225, true);
    let x2 = map(mouseY, 0, width, 0, 225, true);
    let x3 = map(mouseY, 0, width, 0, 225, true);
    background(x1,x2,x3)
    ;
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
