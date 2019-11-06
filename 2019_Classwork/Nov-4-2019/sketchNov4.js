var messages;
var r = 0;
let input, button, message;


//Need to use terminal local server
function preload(){
    messages = loadJSON("DS3Messages.json");

}

function setup(){

    createCanvas(1000,2000);
    input = createInput();
    input.position(width/2,height/2);

    button = createButton('submit');
    button.position(input.x + input.width, input.height - 20);
    button.mousePressed(answer);

    message = createElement('h2','Type between 0 - 16 for template');
    message.position(20.5);

}

function draw(){
    background(0);
    fill(225);
    textAlign(CENTER);

    //Shows templates for messages
    for(var i=0; i < messages.templates.length; i++){
        var y = i*24 + 24;
        text(i + " " + messages.templates[i],width/2 - 400, y);
    }

    //Shows creatures for **** spaces
    for(var c=0; c < messages.words.creatures.length/2; c++){
        var v = c*15 + 15;
        text(c*2 + " " + messages.words.creatures[c*2], width/2 - 290, v);
        text(1+c*2 + " " + messages.words.creatures[1+c*2], width/2 - 200, v);
    }

    text(messages.templates[createInput('')],width/2,height/2);

}

function answer(){
    const temp = input.value();
    message.html(temp);
    input.value('');
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}

