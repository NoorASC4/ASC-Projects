//function setup creates a canvas with a grey background

x = 0

function setup(){ 
    createCanvas(windowWidth/2,windowHeight/2);
    background(225);
}

function draw(){
    
    textSize(32);
    textFont("Pacifico");
    text("Type the Song Lyrics!",50,50);

    textSize(20);
    background(225);
    text("Type this 1",50, 100);
    text("Type this 2",50, 150);
    text("Type this 3",50, 200);
    text("Type this 4",50, 250);
    text("Points Earned : " + x ,50, 350);
}

var str1 = "Type"
function createArray(str){
    myArray = [];
    for (i=0; i < str1.length; i++) {
        myArray.push(str1.charAt(i));
    }
    return myArray;
}
console.log(createArray(str1));
function keyTyped (){
    myArray = createArray(str1);
    for (var i = 0; i < 4; i++){
        if (key === myArray[i]){
            x+=10;
        }
    }
}
