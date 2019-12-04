let x = 0;
let y = 0;
let z = 0;
let dim = 80.0;
let angle = 0.0;
let jitter = 0.0;
let a = 0.0;

function setup(){

    //windowWidth for this Mac = 1280
    //windowHeight for this Mac = 660
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER);
    background(0);
}

function draw(){
    //background(102);
    /*
    x = x + 4;
    z = z - 8;

    if(x > width + dim){
        x = -dim;
    }
    if(z < -width*2 - dim*2){
        z = width/8;
    }
    if(second() % 2 === 0){
        jitter = random(-0.2,0.2);
    }

    translate(x,height / 2 - dim / 2);
    fill(225);
    rect(-dim/2, -dim/2, dim, dim);
    rect(-dim/2, dim*1.5, dim, dim);
    angle = angle + jitter;
    let c = cos(angle);
    rotate(c);

    translate(z,dim);
    fill(0);
    rect(windowWidth, -dim/2, dim, dim);
    rect(windowWidth, -dim*2.5, dim, dim);
    */

    a = a + 0.2;

    translate(windowWidth/2,windowHeight/2);
    rotate(angle);
    ellipse(-25+a,-50,50,100);
    fill(random(150,225),random(0,225),225);
    angle += 0.9;

}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
