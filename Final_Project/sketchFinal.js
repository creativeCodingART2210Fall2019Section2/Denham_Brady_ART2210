var messages;
var r = 0;
let inp, button, template;
let inp2, select;
let button2, button3, button4, button5, button6, button7, button8, button9, button10, button11;
let buttonf;


//Need to use terminal local server
function preload(){
    messages = loadJSON("DS3Messages.json");

}

function setup(){

    createCanvas(1000,1000);
    inp = createInput('');
    inp.position(width,10);

    inp2 = createInput('');
    inp2.position(width,100);

    button = createButton('submit');
    button.position(width + inp.width, 10);
    button.mousePressed(answer);

    button2 = createButton('Creatures', messages.words.creatures[answer2]);
    button2.position(width, 120);
    button2.mousePressed(answer2);

    button3 = createButton('Objects', messages.words.objects[answer3]);
    button3.position(width + button2.width, 120);
    button3.mousePressed(answer3);

    button4 = createButton('Techniques', messages.words.techniques[answer4]);
    button4.position(width + button2.width + button3.width, 120);
    button4.mousePressed(answer4);

    button5 = createButton('Actions', messages.words.actions[answer5]);
    button5.position(width, 140);
    button5.mousePressed(answer5);

    button6 = createButton('Geography', messages.words.geography[answer6]);
    button6.position(width + button5.width, 140);
    button6.mousePressed(answer6);

    button7 = createButton('Orientation', messages.words.orientation[answer7]);
    button7.position(width + button5.width + button6.width, 140);
    button7.mousePressed(answer7);

    button8 = createButton('Body Parts', messages.words.bodyparts[answer8]);
    button8.position(width, 160);
    button8.mousePressed(answer8);

    button9 = createButton('Attribute', messages.words.attribute[answer9]);
    button9.position(width + button8.width, 160);
    button9.mousePressed(answer9);

    button10 = createButton('Concepts', messages.words.concepts[answer10]);
    button10.position(width + button8.width + button9.width, 160);
    button10.mousePressed(answer10);

    button11 = createButton('Musings', messages.words.musings[answer11]);
    button11.position(width + button8.width, 180);
    button11.mousePressed(answer11);

    buttonf = createButton('Complete the Message', messages.templates[finalAnswer]);
    buttonf.position(width, 280);
    buttonf.mousePressed(finalAnswer);

    template = createElement('h2','Type between 0 - 16 for template');
    template.position(1010,20);

    select = createElement('h2', 'Type number from a category and then press the corresponding button');
    select.position(1010,180);

    final = createElement('h2', 'Final Answer Displayed Here');
    final.position(1010, 280);
}

function draw(){
    background(0);
    fill(225);
    textAlign(CENTER);

    push();
    textSize(16);
    text("Scroll down for more options", width - 105, 15);
    pop();

    push();
    textSize(16);
    text("Templates", width/2 - 420, 24);
    pop();
    //Shows templates for messages
    for(var a=0; a < messages.templates.length; a++){
        var z = a*24 + 48;
        text(a + " " + messages.templates[a],width/2 - 420, z);
    }

    //Shows all options for the **** spaces
    push();
    textSize(16);
    text("Creatures", width/2 - 245, 16)
    pop();
    for(var b=0; b < messages.words.creatures.length/2; b++){
        var y = b*16 + 32;
        text(b*2 + " " + messages.words.creatures[b*2], width/2 - 290, y);
        text(1+b*2 + " " + messages.words.creatures[1+b*2], width/2 - 200, y);
    }

    push();
    textSize(16);
    text("Objects", width/2 - 30, 16);
    pop();
    for(var c=0; c < messages.words.objects.length/2; c++){
        var x = c*16 + 32;
        text(c*2 + " " + messages.words.objects[c*2], width/2 - 80, x);
        text(1+c*2 + " " + messages.words.objects[1+c*2], width/2 + 20, x);
    }

    push();
    textSize(16);
    text("Techniques", width/2 -30, 364);
    pop();
    for(var d=0; d < messages.words.techniques.length/2; d++){
        var w = d*16 + 380;
        text(d*2 + " " + messages.words.techniques[d*2], width/2 -80, w);
        text(1+d*2 + " " + messages.words.techniques[1+d*2], width/2 + 45, w);
    }
    push();
    textSize(16);
    text("Actions", width/2 + 220, 16);
    pop();
    for(var e=0; e < messages.words.actions.length/2; e++){
        var v = e*16 + 32;
        text(e*2 + " " + messages.words.actions[e*2], width/2 + 160, v);
        text(1+e*2 + " " + messages.words.actions[1+e*2], width/2 + 280, v);
    }

    push();
    textSize(16);
    text("Geography", width/2 + 240, 250);
    pop();
    for(var f=0; f < messages.words.geography.length/2; f++){
        var u = f*16 + 266;
        text(f*2 + " " + messages.words.geography[f*2], width/2 + 180, u);
        text(1+f*2 + " " + messages.words.geography[1+f*2], width/2 + 300, u);
    }

    push();
    textSize(16);
    text("Orientation", width/2 + 405, 160);
    pop();
    for(var g=0; g < messages.words.orientation.length/2; g++){
        var t = g*16 + 176;
        text(g*2 + " " + messages.words.orientation[g*2], width/2 + 370, t);
        text(1+g*2 + " " + messages.words.orientation[1+g*2], width/2 + 440, t);
    }

    push();
    textSize(16);
    text("Body Parts", width/2 - 350, 630);
    pop();
    for(var h=0; h < messages.words.bodyparts.length/2; h++){
        var s = h*16 + 646;
        text(h*2 + " " + messages.words.bodyparts[h*2], width/2 - 400, s);
        text(1+h*2 + " " + messages.words.bodyparts[1+h*2], width/2 - 300, s);
    }

    push();
    textSize(16);
    text("Attribute", width/2 - 150, 630);
    pop();
    for(var i=0; i < messages.words.attribute.length/2; i++){
        var r = i*16 + 646;
        text(i*2 + " " + messages.words.attribute[i*2], width/2 - 200, r);
        text(1+i*2 + " " + messages.words.attribute[1+i*2], width/2 - 100, r);
    }

    push();
    textSize(16);
    text("Concepts", width/2 + 70, 610);
    pop();
    for(var j=0; j < messages.words.concepts.length/2; j++){
        var q = j*16 + 626;
        text(j*2 + " " + messages.words.concepts[j*2], width/2 + 20, q);
        text(1+j*2 + " " + messages.words.concepts[1+j*2], width/2 + 120, q);
    }

    push();
    textSize(16);
    text("Musings", width/2 + 310, 580);
    pop();
    for(var k=0; k < messages.words.musings.length/2; k++){
        var p = k*16 + 596;
        text(k*2 + " " + messages.words.musings[k*2], width/2 + 240, p);
        text(1+k*2 + " " + messages.words.musings[1+k*2], width/2 + 390, p);
    }

}
//answer function for first input box
function answer(){
    const temp = inp.value();
    template.html(messages.templates[temp]);
    inp.value('');
}
//answer functions for second input box
function answer2(){
    const temp2 = inp2.value();
    select.html(messages.words.creatures[temp2]);
    inp2.value('');
}

function answer3(){
    const temp2 = inp2.value();
    select.html(messages.words.objects[temp2]);
    inp2.value('');
}

function answer4(){
    const temp2 = inp2.value();
    select.html(messages.words.techniques[temp2]);
    inp2.value('');
}

function answer5(){
    const temp2 = inp2.value();
    select.html(messages.words.actions[temp2]);
    inp2.value('');
}

function answer6(){
    const temp2 = inp2.value();
    select.html(messages.words.geography[temp2]);
    inp2.value('');
}

function answer7(){
    const temp2 = inp2.value();
    select.html(messages.words.orientation[temp2]);
    inp2.value('');
}

function answer8(){
    const temp2 = inp2.value();
    select.html(messages.words.bodyparts[temp2]);
    inp2.value('');
}

function answer9(){
    const temp2 = inp2.value();
    select.html(messages.words.attribute[temp2]);
    inp2.value('');
}

function answer10(){
    const temp2 = inp2.value();
    select.html(messages.words.concepts[temp2]);
    inp2.value('');
}

function answer11(){
    const temp2 = inp2.value();
    select.html(messages.words.musings[temp2]);
    inp2.value('');
}
//function for the completed answer
function finalAnswer(){
    if(template.html() == messages.templates[0]){
        final.html(select.html() + ' ahead');
    }

    if(template.html() == messages.templates[1]){
        final.html('No ' + select.html() + ' ahead');
    }

    if(template.html() == messages.templates[2]){
        final.html(select.html() + ' required ahead');
    }

    if(template.html() == messages.templates[3]){
        final.html('Be wary of ' + select.html());
    }

    if(template.html() == messages.templates[4]){
        final.html('try ' + select.html());
    }

    if(template.html() == messages.templates[5]){
        final.html('Could this be a ' + select.html() + '?');
    }

    if(template.html() == messages.templates[6]){
        final.html('If only I had a ' + select.html());
    }

    if(template.html() == messages.templates[7]){
        final.html('visions of ' + select.html());
    }

    if(template.html() == messages.templates[8]){
        final.html('Time for ' + select.html());
    }

    if(template.html() == messages.templates[9]){
        final.html(select.html());
    }

    if(template.html() == messages.templates[10]){
        final.html(select.html() + '!');
    }

    if(template.html() == messages.templates[11]){
        final.html(select.html() + '?');
    }

    if(template.html() == messages.templates[12]){
        final.html(select.html() + '...');
    }

    if(template.html() == messages.templates[13]){
        final.html("Huh. It's a " + select.html() + '...');
    }

    if(template.html() == messages.templates[14]){
        final.html('praise the ' + select.html() + '!');
    }

    if(template.html() == messages.templates[15]){
        final.html('Let there be ' + select.html());
    }

    if(template.html() == messages.templates[16]){
        final.html('Ahh, ' + select.html() + '...');
    }
}

function windowResized(){

    drawCanvas(windowWidth,windowHeight);

}

