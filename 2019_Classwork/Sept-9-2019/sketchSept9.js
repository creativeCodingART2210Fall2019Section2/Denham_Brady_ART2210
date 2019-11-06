//var img

var var1={
    x:100,
    y:200,
    z:50,
    a:120,
    b:600,
    c:700
};

var i;

function preload(){
    //img = loadImage("file:///Users/bradydenham/Desktop/ART_2210/Sept-9-2019/testImg.jpg");

}

function setup(){

    //windowWidth = 2560
    //windowHeight = 822
    createCanvas(windowWidth,windowHeight);

}

function draw(){

    for(var i=20; i<400; i+=8) {
        line(i,40,i+60,80);
    }

    //image(img,0,0);

    ellipse(windowWidth/2,var1.y,var1.x,var1.a);

}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
