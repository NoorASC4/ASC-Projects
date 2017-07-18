//Create an array of size 10 and place a random integer in each index.
//Write a function that will find the sum of the array values.

myArray= [];
for (i=0;i<10;i++) {
    myArray[i] = Math.floor(Math.random() * 10);
};
console.log(myArray);
function findSum(myArray) {
    a = 0;
    for (var i=0; i<10; i++) {
        a = a + myArray[i];
    }
    console.log(a)
}

function Car(name, color, horsepower) {
    this.name = name;
    this.color = color;
    this.horsepower = horsepower;
    this.returnName = function() {
        console.log( this.name);
    };
    this.changeColor = function() {
        this.color = "Green";
    };
}


var car1 = new Car("Audi", "Black", 500);