

//tells computer to go and use prompt synch
var prompt = require('prompt-sync')();

//Big pokemon object preset
function Pokemon(name, type, HP, def, atk, legend) {
    this.name = name;
    this.type = type;
    this.HP = HP;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
}

//all my pokemon objects and their stats and shit
var Charmander = new Pokemon("Charmander", ["Fire"], 39, 43, 52, false);
var Dragonite = new Pokemon("Dragonite",["Flying", "Dragon"], 91, 95, 134, false);
var Abra = new Pokemon("Abra",["Psychic"], 25, 15, 20, false);
var Zapdos = new Pokemon("Zapdos", ["Electric", "Flying"], 90, 85, 90, true);
var Moltres = new Pokemon("Moltres", ["Fire", "Flying"], 90, 90, 100, true);
var Articuno = new Pokemon("Articuno", ["Ice", "Flying"], 90, 100, 85, true);

//big array with all of my pokemon objects
var pokeArray = [Charmander, Dragonite, Abra, Zapdos, Moltres, Articuno];

//function printRoster. it goes through each object and lists out all their key value pairs.

function printRoster(pokeArray) {
    for (i = 0; i<pokeArray.length; i++) {
        console.log(pokeArray[i]);
    }
};

//pokemonAttacked. so i have to do a loop that goes through each pokemon
//and then it should like utilize 'this.HP - 10' and saves it
// then use printRoster to print the new pokemon with their new health.

function pokemonAttacked(pokeArray) {
    for (i = 0;i <pokeArray.length; i++) {
        pokeArray[i].HP = pokeArray[i].HP - 10;
    }
    console.log(printRoster(pokeArray));
};

//this function would first generate a random number between 0-5, as the index for the pokearray
//then it should ask user for an number
//it should then use "this.hp- number" 

function subtractHP (pokeArray) {
    var num = Math.floor(Math.round() * pokeArray.length);
    var num2 = prompt('How many HP points would you like to take away? ');
    pokeArray[num].HP = pokeArray[num].HP - num2;
};

subtractHP(pokeArray);
