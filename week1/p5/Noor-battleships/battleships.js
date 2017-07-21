
function setup() {
    createCanvas(500,500);
    background(225);
}

var x = 0;
var y = 0;
var myArray = [[],[],[],[],[]];


function rectangle(color, ship) {
    this.color = color;
    this.ship = ship;
}

function draw() {
    strokeWeight(2);
    for (j=0; j < 5; j++){
        for (i = 0 ;i < 5; i++){
            rect(x,y,100,100);
            myArray[j][i] = new rectangle("white", false);
            x += 100;
        }
        x = 0;
        y += 100;
    }
    console.log(myArray);
    q = 0
    w = 0
    for (k = 0; k < 10; k++){
        c = userInput();
        for (j=0; j < 5; j++){
            for (i = 0 ;i < 5; i++){
                fill(c);
                rect(q,w,100,100);
                myArray[j][i].color = c
                x += 100;
            }
            q = 0;
            w += 100;
        }
    }
}

function userInput(){
    var a = prompt("What row would you like to choose? ");
    var b = prompt("What column would you like to choose? ")
    if (myArray[a][b].ship == false){
        console.log("You have failed!");
        myArray[a][b].color = "green";
        return "Green";
    }else{
        myArray[a][b].color = "red";
        console.log("You successfully hit a ship!");
        return "Red";
    }

}