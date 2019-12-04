var radius = 50;
var speed = 0.5;
var directionX = 1;
var directionY = 1;
var ball = {
    x: 300,
    y: 200,
    xspeed: 9,
    yspeed: 3
}

function setup(){

    createCanvas(windowWidth,windowHeight);
    ellipseMode(RADIUS);

}

function flower(){ //x,y,petals
    fill(0,230,200);
    rect(290,200,20,150);
    fill(225,0,120);
    ellipse(300,200,100,100);
}

function draw(){

    background(0);
    ball.x += ball.xspeed * directionX;
    ball.y += ball.yspeed * directionY;
    ellipse(ball.x,ball.y,radius);
    if((ball.x > windowWidth-radius) || (ball.x < radius)){
        directionX = -directionX;
        fill(random(0,225),0,random(50,200));
        ball.yspeed = random(5,25);
    }
    if((ball.y > windowHeight-radius) || (ball.y < radius)){
        directionY = -directionY;
        fill(0,random(50,200),random(0,225));
        ball.xspeed = random(5,25);
    }
    //Reset ball incase of break out
    else if((ball.x > windowWidth+(radius/2)) || (ball.y > windowHeight+(radius/2)) || (ball.x < 0-radius/2) || ball.y < 0-radius/2){
        ball.x = windowWidth/2;
        ball.y = windowHeight/2;
    }

}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
