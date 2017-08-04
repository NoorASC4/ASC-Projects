

function setup(){
    createCanvas(600, 600);
    background(225);
    strokeWeight(2);
}

function Bullet(xpos,ypos,width,height){
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = width;
    this.height = height; 
}
var bulletChamber = [];
var aliens = [];

var rectx = 100;
var recty = 550;

var bulletx = rectx - 10;

function draw(){
    background(225);
    x = 0;
    y = 0;
    w = 50;
    h = 50;

    aliens = [25,125,225,325,425,525];
    for (i = 0; i <6; i++){
        rect (aliens[i], y + 25, w , h);
    }


    noStroke();
    fill(225);
    rect(0,530, 600, 15);
  
  
    stroke("black");
    strokeWeight(2);
    fill("white");
    rect(rectx, recty - 15, 100, 8);

    for(i = 0; i <bulletChamber.length; i++){
       rect(bulletChamber[i].xpos, bulletChamber[i].ypos, 10, 10);
       bulletChamber[i].ypos -= 10;
       q  = bulletChamber[i].xpos;
       if (bulletChamber[i].ypos == 80){
           for (i= 0; i <aliens.length; i ++){
               if (aliens[i] <= q <= aliens[i + 1]) {
                   w = 0;
           ebay         h = 0;
               }
           }
       }
    }
    if(keyIsDown(RIGHT_ARROW)) {
       rectx = rectx + 5;
    };
    if(keyIsDown(LEFT_ARROW)) {
       rectx = rectx - 5;
    };
    if(rectx >= 500){
       rectx = 500;
    }
    if(rectx <= 0){
       rectx = 0;
    }
    
}
var bullety = recty - 45;

function keyPressed(){
    if (keyCode === 32){
    bulletChamber.push(new Bullet(rectx + 50,recty - 20 ,5,10));
    }
}
