//var weather1;
//var weather2;
var weather;
var api = "http://api.openweathermap.org/data/2.5/weather?q=";
//var city = "Baton%20Rouge";
var apiKey = "&APPID=0dc35ea884680530b56026512842b9e5";
var units = "&&units=imperial";

var input;

/*
function preload(){
    weather1 = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Baton%20Rouge&APPID=0dc35ea884680530b56026512842b9e5&&units=metric");
    weather2 = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Gonzales&APPID=0dc35ea884680530b56026512842b9e5&&units=metric");

}
*/

function setup(){

    createCanvas(windowWidth,windowHeight);

    var button = select('#submit');
    button.mousePressed(weatherAsk);

    input = select('#city');

}

function weatherAsk(){
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data){
    weather = data;
}

function draw(){
    background(0);

    if(weather){
        fill(225);
        textAlign(CENTER);
        noStroke();
        rectMode(CENTER);
        text("Temperature: " + weather.main.temp, width/2, height/2 + 140);
        text("Humidity: " + weather.main.humidity, width/2, height/2 + 160);
        text(weather.name, width/2, height/2 - 150);
        text("Wind Speed: " + weather.wind.speed, width/2, height/2 + 220);
        fill(225,100,100);
        rect(width/2,height/2,70,weather.main.temp_max*2.5);
        text("Temp High: " + weather.main.temp_max, width/2, height/2 + 180);
        fill(weather.main.humidity);
        rect(width/2,height/2,70,weather.main.temp*2.5);
        fill(100,100,225);
        rect(width/2,height/2,70,weather.main.temp_min*2.5);
        text("Temp Low: " + weather.main.temp_min, width/2, height/2 + 200);

    }
    /*
    if(weather1){
        fill(225);
        textAlign(CENTER);
        ellipse(width/2 - 200,height/2,weather1.main.humidity,weather1.main.temp);
        text("Temperature: " + weather1.main.temp, width/2 -200, height/2 + 100);
        text("Humidity: " + weather1.main.humidity, width/2 -200, height/2 + 120);
        text(weather1.name, width/2 -200, height/2 - 250);
    }

    if(weather2){
        fill(225);
        textAlign(CENTER);
        ellipse(width/2 + 200,height/2,weather2.main.humidity,weather2.main.temp);
        text("Temperature: " + weather2.main.temp, width/2 +200, height/2 + 100);
        text("Humidity: " + weather2.main.humidity, width/2 +200, height/2 + 120);
        text(weather2.name, width/2 +200, height/2 - 250);
    }
    */
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}