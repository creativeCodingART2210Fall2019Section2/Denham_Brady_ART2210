let rocks = [];
let numRocks = 150;
var radius = 40;
var sec = 0;
let spring = 0.2;

function setup(){
    createCanvas(windowWidth,windowHeight);

    for(let i = 0; i < numRocks; i++){
        rocks[i] = new Obstacles();
    }
    for(let a = 0; a < numRocks; a++){
        rocks[a] = new Obstacles();
    }
    for(let c = 0; c < numRocks; c++){
        rocks[c] = new Obstacles();
    }
}

function draw(){
    background(0,89,100);
    for(var time = 0; time < 1000; time++){
        time = millis();
    }
    fill(100,225,150);
    if(time >= 3000){
        for(var i = 0; i < rocks.length; i++){
            //rocks[i].collide();
            rocks[i].move();
            rocks[i].display();
        }
    }
    push();
    fill(225);
    ship = triangle(mouseX, mouseY-15, mouseX-10, mouseY+5, mouseX+10, mouseY+5);
    pop();
    if(time >= 25000){
        fill(225,150,0);
        for(var a = 0; a < rocks.length; a++){
            rocks[a].move();
            rocks[a].display();
        }
    }
    if(time >=50000){
        fill(175,50,0);
        for(let c = 0; c < rocks.length; c++){
            rocks[c].move();
            rocks[c].display();
        }
    }
}

class Obstacles{
    constructor(idin, oin){
        this.x = random(windowWidth);
        this.y = random(0,windowHeight/2);
        this.diameter = random(10,70);
        this.speed = 2;
        this.id = idin;
        this.vx = 0;
        this.vy = 0;
        this.others = oin;
    }

    move(){
        this.x += random(this.speed*-1, this.speed*1);
        this.y += random(this.speed*-0.5, this.speed*2.7);
        if((this.x > windowWidth+(radius/2)) || (this.y > windowHeight+(radius/2)) || (this.x < 0-radius/2) || this.y < 0-radius/2){
            this.x = random(0,windowWidth);
            this.y = 0;
        }
    }
/*
    collide(){
        for(let i = this.id + 1; i < numRocks; i++){
            let dx = this.others[i].x - this.x;
            let dy = this.others[i].y - this.y;
            let distance = sqrt(dx * dx + dy * dy);
            let minDist = this.others[i].diameter/2 + this.diameter/2;
            if(distance < minDist){
                let angle = atan2(dy, dx);
                let targetX = this.x + cos(angle) * minDist;
                let targetY = this.y + sin(angle) * minDist;
                let ax = (targetX - this.others[i].x) * spring;
                let ay = (targetY - this.others[i].y) * spring;
                this.vx -= ax;
                this.vy -= ay;
                this.others[i].vx += ax;
                this.others[i].vy += ay;
            }
        }
    }
    */

    display(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
