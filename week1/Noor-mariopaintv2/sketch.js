//sets up the sketch
function setup() {
    createCanvas(500,500);
    background(225);
}

//as the user drags the mouse,
// a circle is created


function mouseDragged() {
    num = random(0,255);
    num2 = random(0,255);
    num3 = random(0,255);
    fill(num,num2,num3);
    ellipse (mouseX,mouseY,75);
}

function mousePressed(){
    fill(225);
    strokeWeight(0);
    ellipse(mouseX,mouseY,75)
};