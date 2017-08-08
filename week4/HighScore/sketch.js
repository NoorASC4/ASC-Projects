
//Set database object
var database = firebase.database().ref();



alert("Hey!");



function playRock() {
    sen = "Rock";
    game(sen);
}
function playScissor() {
    sen = "Scissor";
    game(sen);
}
function playPaper() {
    sen = "Paper";
    game(sen);
}



//function prob causes an alert or adds to html using jquery
//saying that it was a tie and you need to click another button
gamesWon = 0;
gamesLost = 0;
gamesTied = 0;

function tie(){
    gamesTied += 1;
    document.getElementById("Ties").innerHTML = "Ties: " + gamesTied;
}


//this function will just like pop up in the html that you won!
// it will also add 1 to amount of games won! and ask if you want to
//play again
function win(){
    gamesWon += 1;
    document.getElementById("Wins").innerHTML = "Wins: " + gamesWon;
}

//this fucntion will say that you lost! adds 1 to games lost! and asks if you want to play again
function lose() {
    gamesLost += 1;
    document.getElementById("Loses").innerHTML = "Loses: " + gamesLost;
}


var computerPlay;
function game(option) {
    //Getting the computer's play
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
        computerPlay = "Rock"
    } else if (num == 1) {
        computerPlay = "Paper"
    } else {
        computerPlay = "Scissor"
    }
    console.log(computerPlay);
    console.log(option);



    //Comparing the values if they equal each other
    if (computerPlay == option) {
        console.log("It was a tie")
        tie();
    }
    
    //comparing the value to see if computer wins or loses
    if (computerPlay == "Rock" && option == "Paper"){
        console.log("RvP");
        win();
    }
    if (computerPlay == "Rock" && option == "Scissor"){
        console.log("RvS");
        lose();
    }
    if (computerPlay == "Paper" && option == "Scissor"){
        console.log("PvS");
        win();
    }
    if (computerPlay == "Paper" && option == "Rock"){
        console.log("PvS");
        lose();
    }
    if (computerPlay == "Scissor" && option == "Rock"){
        console.log("SvR");
        win();
    }
    if (computerPlay == "Scissor" && option == "Paper"){
        console.log("SvP");
        lose();
    }
    

    //once they lose 10 times
    if (gamesLost == 10) {
        leaderboard();
    }
}

function leaderboard () {
    var scores = [];
    scores.push(gamesWon);
    var name = prompt("You've Lost the game! Please Enter Your Initials: ", "AA")
    document.getElementById("top1").innerHTML = "1. " + name + ": " + scores[0];
    if (scores[1] != undefined){
    document.getElementById("top2").innerHTML = "2. " + scores[1];
    }
    if (scores[2] != undefined){
    document.getElementById("top3").innerHTML = "3. " + scores[2];
    }
}




//button executes this function
function updateDB() {
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);
var data={
    NAME: name,
    MESSAGE: message
}
    //Update database here

database.push(data);
}
database.on("child_added", function(rowData){
    var row = rowData.val();
    var name = row.NAME;
    var message = row.MESSAGE;
    var fullText = "<p>" + name + ": " + message + "</p>";
    $(".allMessages").append(fullText);

   
})

