var x = 0;

function setup(){

    //windowWidth = 2560
    //windowHeight = 822
    createCanvas(windowWidth,windowHeight);

    for(x = 0; x <= width; x += 50){
        for(var y = 0; y <= height; y += 50){
            let r1 = random(0,225);
            let r2 = random(0,225);
            let r3 = random(0,225);
            ellipse(x, y, 30, 30);
            fill(r1,r2,r3);
        }
    }
}

function draw(){
/*
    while (x <= width){
        ellipse(x, 200, 30, 30);
        x = x + 50;
    }

    do{
        ellipse(x, 200, 30, 30);
        x = x + 50;
    }while(x <= width);
*/
    
    let h = hour();
    let m = minute();
    text(h + ":" + m, 20, 30);

}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}
