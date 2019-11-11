var url = 'http://api.open-notify.org/iss-now.json';

var issX = 0;
var issY = 0;

var x = 0;
var y = 0;
var issW;
var issH;

var lat;
var long;

//Make sure to open this up with localhost
function setup(){

    createCanvas(windowWidth,windowHeight);

    setInterval(askISS, 1000);
    ellipseMode(CENTER);
}

function askISS(){

    loadJSON(url, gotData, 'jsonp');
}

function gotData(data){
    lat = data.iss_position.latitude;
    long = data.iss_position.longitude;
    issX = map(lat, -90, 90, 0, width);
    issY = map(long, -180, 180, 0, height);
}

function draw(){
    background(0);
    fill(225);
    stroke(0);

    textAlign(CENTER);
    text('Lat: ' + lat + ' / Long: ' + long, width/2, height/2);
/*
    if((lat < 0) || (long < 0)){
        issW = issX * -0.5;
        issH = issY * -0.5;
    }
    else{
        issW = issX * 0.5;
        issH = issY * 0.5;
    }
*/
    noFill();
    stroke(225);
    ellipse(width/2 + -issX, height/2 + issY, 15, 15);

    if(x >= windowWidth + issW){
        y = issH;
        x = 0;
    }

}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}