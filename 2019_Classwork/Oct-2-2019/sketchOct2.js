var img;

function preload(){
    img = loadImage("https://github.com/bdenha3/Denham_Brady_ART2210/raw/master/img/Nerscylla.jpg");
}

function setup(){

    createCanvas(windowWidth,windowHeight);

}

function draw(){

    image(img, 0, 0, windowWidth/1.3, windowHeight);

}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
