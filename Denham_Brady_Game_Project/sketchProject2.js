let rocks = [];
var radius = 40;
var sec = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);

    for(let i = 0; i < 60; i++){
        rocks[i] = new Obstacles();
    }
    for(let a = 0; a < 50; a++){
        rocks[a] = new Obstacles();
    }
    for(let c = 0; c < 40; c++){
        rocks[c] = new Obstacles();
    }
}

function draw(){
    background(0,89,100);
    fill(100,225,150);
    for(var i = 0; i < rocks.length; i++){
        rocks[i].move();
        rocks[i].display();
    }
    push();
    fill(225);
    ship = triangle(mouseX, mouseY-15, mouseX-10, mouseY+5, mouseX+10, mouseY+5);
    pop();
    for(var time = 0; time < 1000; time++){
        time = millis();
    }
    if(time >= 20000){
        fill(225,150,0);
        for(var a = 0; a < rocks.length; a++){
            rocks[a].move();
            rocks[a].display();
        }
    }
    if(time >= 50000){
        fill(175,50,0);
        for(let c = 0; c < rocks.length; c++){
            rocks[c].move();
            rocks[c].display();
        }
    }
}

class Obstacles{
    constructor(){
        this.x = random(windowWidth);
        this.y = random(0,windowHeight/2);
        this.diameter = random(10,70);
        this.speed = 2;
    }

    move(){
        this.x += random(this.speed*-1, this.speed*1);
        this.y += random(this.speed*-0.5, this.speed*2.7);
        if((this.x > windowWidth+(radius/2)) || (this.y > windowHeight+(radius/2)) || (this.x < 0-radius/2) || this.y < 0-radius/2){
            this.x = random(0,windowWidth);
            this.y = 0;
        }
    }

    display(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
