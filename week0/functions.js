/*
//Defining function hello 
function hello() {
    console.log("Hello World");
}

hello(); //calling the function

function add(num1, num2) {
    return (num1 + num2);
}

console.log(add(5, 7))
*/


//My version
function noor(num1, num2){
    //create an arrray of numbers from num1 to num2
    var myArray = [];
    //create a loop for numbers from num1 ot num2
    for (var i=num1; i<=num2; i++) {
        myArray.push(i)
    };
  
    var length = myArray.length;
    
    var inde = Math.floor(Math.random() * length)

    console.log(myArray[inde]);    
}

noor(0,10000000); 


/*
Class's version
var wholeNumber;
function rand(number){
    var wholeNumber = Math.floor(Math.random() * number);
    return wholeNumber;
};

console.log(rand(2000));

*/