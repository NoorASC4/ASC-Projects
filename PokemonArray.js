var myPokemonRoster = ["Charmander","Dragonite","Abra", "Gyarados","Lugia"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.push("Snorlax");
myPokemonRoster.push("Onix");
var RosterSize = myPokemonRoster.length;

for (var i = 0; i < myPokemonRoster.length; i++) {
    console.log(myPokemonRoster[i]);
}

for (var i = 0; i < myPokemonRoster.length; i++) {
    console.log(myPokemonRoster[myPokemonRoster.length - 1 - i]);
}