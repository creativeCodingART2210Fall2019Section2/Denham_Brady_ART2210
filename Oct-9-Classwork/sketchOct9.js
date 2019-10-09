let bugs = [];
var radius = 40;

function setup(){
    createCanvas(windowWidth,windowHeight);

    for(let i = 0; i < 250; i++){
        bugs[i] = new Bubble();
    }
}

function draw(){
    background(50,89,100);
    for(var i = 0; i < bugs.length; i++){
        bugs[i].move();
        bugs[i].display();
    }
}

class Bubble{
    constructor(){
        this.x = random(windowWidth);
        this.y = random(windowHeight);
        this.diameter = random(10,70);
        this.speed = 2;
    }

    move(){
        this.x += random(this.speed*-1, this.speed*1);
        this.y += random(this.speed*-5, this.speed*0.5);
        if((this.x > windowWidth+(radius/2)) || (this.y > windowHeight+(radius/2)) || (this.x < 0-radius/2) || this.y < 0-radius/2){
            this.x = random(0,windowWidth);
            this.y = windowHeight;
        }
    }

    display(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
        //fill(random(0,225),random(0,225),random(0,225)); //Epilepsy Warning
    }
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
