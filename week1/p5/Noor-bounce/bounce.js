
function setup(){
    createCanvas(500, 500);
    background("pink");
}


xpos = 0;
ypos = 0;

function draw(){ 
    background('pink');
    ellipse(xpos, ypos, 50);
    ballMove();    
}

function ballMove(){
    ellipse(xpos, ypos, 50);
    xpos += 5;
    ypos += 5;
    w
}
