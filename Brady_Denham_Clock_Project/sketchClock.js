function setup(){

    //windowWidth = 2560
    //windowHeight = 822
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    textSize(width / 25);

}

function draw(){

    background(225);
    translate(windowWidth/2,windowHeight/2);
    rotate(-90);

    var s = second();
    var m = minute();
    var h = hour();

    fill(0);
    ellipse(0, 0, 500);
    stroke(0);

    strokeWeight(100);
    noFill();
    //stroke(255, 100, 150);
    let secondAngle = map(s, 0, 60, 0, 360);
    //arc(0, 0, 500, 500, 0, secondAngle);

    strokeWeight(70);
    //stroke(100, 225, 150);
    let minuteAngle = map(m, 0, 60, 0, 360);
    //arc(0, 0, 500, 500, 0, minuteAngle);

    strokeWeight(40);
    //stroke(150, 100, 225);
    let hourAngle = map(h % 12, 0, 12, 0, 360);
    //arc(0, 0, 500, 500, 0, hourAngle);

    //Second Hand
    strokeWeight(5);
    push();
    rotate(secondAngle);
    stroke(225);
    beginShape();
    vertex(0,0);
    vertex(20,0);
    vertex(35,10);
    vertex(50,-5);
    vertex(70,0);
    vertex(80, 0);
    vertex(100,-10);
    vertex(112,-10);
    vertex(131,5);
    vertex(150,-10)
    vertex(170,0);
    vertex(220,0);
    endShape();
    pop();

    //Minute Hand
    push();
    rotate(minuteAngle);
    stroke(225, 200, 50);
    beginShape();
    vertex(0, 0)
    vertex(50, 13);
    vertex(170, 0);
    vertex(50, -13);
    endShape(CLOSE);
    pop();

    //Hour Hand
    push();
    rotate(hourAngle);
    stroke(200, 100, 225);
    beginShape();
    vertex(0, 0)
    vertex(25, 10);
    vertex(50, 5);
    vertex(75, 10);
    vertex(120, 0);
    vertex(75, -10);
    vertex(50, -5);
    vertex(25, -10);
    endShape(CLOSE);
    pop();

    //Spinning Gears for Main Clock
    push();
    rotate(-secondAngle);
    fill(0);
    stroke(225);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    quad(230,50,320,35,320,-35,230,-50);
    rotate(30);
    pop();

    //Bottom Right Spinning Gear
    push();
    translate(-150,-410);
    fill(0);
    ellipse(0,0,200);
    stroke(225);
        push();
        rotate(90);
        text(h + ":" + m, -38, 15,);
        pop();
    rotate(secondAngle*2);
    quad(90,30,150,15,150,-15,90,-30);
    rotate(60);
    quad(90,30,150,15,150,-15,90,-30);
    rotate(60);
    quad(90,30,150,15,150,-15,90,-30);
    rotate(60);
    quad(90,30,150,15,150,-15,90,-30);
    rotate(60);
    quad(90,30,150,15,150,-15,90,-30);
    rotate(60);
    quad(90,30,150,15,150,-15,90,-30);
    rotate(60);
    pop();


}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
