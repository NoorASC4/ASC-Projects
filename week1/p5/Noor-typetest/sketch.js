//function setup creates a canvas with a grey background
function setup(){
    
    createCanvas(windowWidth/2,windowHeight/2);
    background(225);
    
}
x = 0
function draw(){
    
    textSize(32);
    textFont("Pacifico");
    text("Type the Song Lyrics!",50,50);

    textSize(20);
    text("Type this 1",50, 100);
    text("Type this 2",50, 150);
    text("Type this 3",50, 200);
    text("Type this 4",50, 250);
    text("Points Earned : " + x,50, 350);
}


function keyTyped (){
    if (key === "A"){
        x += 10;
    }
}