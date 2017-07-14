var mashArray = ["New York", "New Jersey", "Los Angeles", "Washington"];
var firstQuestion = [1, 2];
var secondQuestion = [Pikachu, Ryu];
firstQuestion[2] = prompt("How many times will you strike?");
secondQuestion[2] = prompt("Who will you choose to fight?");

function fight(){
    // get 3 rand nums
    var num = (Math.floor(Math.random() * 3) - 1);
    var num2 = (Math.floor(Math.random() * 2) - 1);
    var num3 = (Math.floor(Math.random() * 2) - 1);
    var fst
    var scnd
    var thrd
    // set each rand num to a place in each array
    if (num == 0) {
        fst = mashArray[0];        
    }
    if (num == 1) {
        fst = mashArray[1];
    }
    if (num == 2) {
        fst = mashArray[2];
    }
    
    if (num2 == 0) {
        scnd = firstQuestion[0];        
    }
    if (num2 == 1) {
        scnd = firstQuestion[1];
    }
    if (num2 == 2) {
        scnd = firstQuestion[2];
    }

    if (num3 == 0) {
        thrd = secondQuestion[0];        
    }
    if (num2 == 1) {
        thrd = secondQuestion[1];
    }
    if (num == 2) {
        thrd = secondQuestion[2];
    }
    // does the weird statement
    console.log ("You fought " + thrd + "in the " + fst + "and hit them " + scnd + "times. Too bad. MewTwo wins!")
}
// calls on the function
fight();