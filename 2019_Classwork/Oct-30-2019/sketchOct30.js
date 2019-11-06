var birds;
var r = 0;

function preload(){
    birds = loadJSON("birds.json");

}

function setup(){

    createCanvas(400,400);

}

function draw(){
    background(0);
    fill(225);
    textAlign(CENTER);

    for(var i=0; i < birds.birds.length; i++){
        var y = i*32 + 32;
    text(birds.birds[i].family,width/2, y);
    }
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}

