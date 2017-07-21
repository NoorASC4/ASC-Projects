var xspeed = 5;
var yspeed = 3;


function setup(){
    createCanvas(650, 600);
    background("pink");
}

//starts the ellipse at postion (zero zero) 
var xpos = 50;
var ypos = 50;

//think of this fucntion as the main function which is calling everything else
var rectx = 100;
var recty = 550;
var rectxspd = 5;

function draw(){ 
    background('pink');
    fill("yellow");
    ellipse(xpos, ypos, 75, 75);
    ballMove();
    wordy();
    strokeWeight(2)
    fill("white");

    if(keyIsDown(RIGHT_ARROW)) {
        rectx += rectxspd;
    };
    if(keyIsDown(LEFT_ARROW)) {
        rectx -= rectxspd;
    };

    ballTouchesPaddle();

}

//this function basically just causes the ball
//to actually move and 'bounce off the walls
function ballMove(){
    ellipse(xpos, ypos, 75);
    xpos = xpos + xspeed;
    ypos += yspeed;
    if (xpos >= (width-50) || xpos < 50) {
        xspeed = (-xspeed);
    }
    if ( ypos <=50 || ypos >= (height-25)) {
        yspeed = (-yspeed);
    }    
}

function ballTouchesPaddle(){
    rect(rectx, recty - 15, 100, 8);

    if (ypos == (recty- 50) ) {
        yspeed = (-yspeed)
    }
}

/*
function key({
    if(keyIsPressed()=== true){
        rectx += rectxspd;
    }
    /*
    if (keyIsPressed() === ) {
        rextx -= rectxspd;
    }

}
*/



function wordy(){
    fill(255);
    stroke("black");
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(25);
    text("O  O",xpos, ypos);
    line(xpos - 10, ypos + 20, xpos+10, ypos +20);

}

//just takes advantage of fill(rgb) and uses random
//nums to fill the circle with color
function changeColor() {
    num = random(0,255);
    num2 = random(0,255);
    num3 = random(0,255);
    noStroke();
    fill(num, num2, num3);
}

