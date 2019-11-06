/*
var c = []
var x,y;
let ind0, ind1, ind2;
var radius = 40;
var clr;
*/
var flowers;
/*
function preload(){
    flowers = loadJSON("flower.json")
}
*/
function setup(){

    createCanvas(400,400);
    flowers= loadJSON("flower.json")


    /*
    for(let i = 0; i < 250; i++){
        c[i] = new Bubble();
    }
    clr = fill(random(0,225),random(0,225),random(0,225));
    */
}

function draw(){
    background(0);
    fill(flowers.flowerset[0].red,flowers.flowerset[0].green,flowers.flowerset[0].blue);
    textAlign(CENTER);

    text(flowers.flowerset[1].name,width/2,height/2);
    /*
    for(var i = 0; i < c.length; i++){
        c[i].move();
        c[i].display();
    }
    */
}

/*
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
    }
}
*/

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}

