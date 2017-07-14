

//function randletter generates a random letter form alphabet
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function randLetter(){
    var num = Math.floor(Math.random() * 26);
    console.log(alpha[num]);
    return alpha[num];
};

//function randword
function randWord() {
    var length  = Math.floor(Math.random() * 6);
    var str = "";
    for (i = 0; i <= length; i++){
        var let = randLetter();
        str = str + let;
    }
    console.log(str);
    return str;
}

// function random sentence
function randSentence(){
    var len = Math.floor(Math.random() * 6);
    var sen ="";
    for (i = 0; i <= len; i++){
        var wrd = randWord();
        sen = sen + wrd;
        sen = sen + " ";
    }
    sen2 = sen.charAt(0).toUpperCase() + sen.slice(1) + ".";
    
    
    console.log(sen2);
    }

randSentence();


var firstPokemon = ["Charmander", 52, 100];
var secondPokemon = ["Squirtle", 48, 100];
var thirdPokemon = ["Abra", 20, 100];
var fourthPokemon = ["Butterfree", 45, 100];

//funtion pokeAttack
function pokeAttack(fst, scnd) {
    var subractedHP = scnd[2] - fst[1];
    scnd.pop();
    scnd.push(subractedHP);
    console.log(scnd);
}
var num1
var num2
function bonus() {
    var num1 = Math.floor(Math.random() * 4);
    var num2 = Math.floor(Math.random() * 4)
    if (num2 = num1) {
        num2 = Math.floor(Math.random() * 4);
    }
    if (num1=1) {
        num1 = firstPokemon;
    }
    if (num1=2) {
        num1 = secondPokemon;
    }
    if (num1=3) {
        num1 = thirdPokemon;
    }
    if (num1=4) {
        num1 = fourthPokemon;
    }
    if (num2=1) {
        num2 = firstPokemon;
    }
    if (num2=2) {
        num2 = secondPokemon;
    }
    if (num2=3) {
        num2 = thirdPokemon;
    }
    if (num2=4) {
        num2 = fourthPokemon;
    }
    pokeAttack(num1,num2)
}
bonus();