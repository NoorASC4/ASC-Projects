$(document).ready(setup);

var hp = 100;
var gold = 0;
var slain = 0;


function setup(){
    $('body').append("<h1>Welcome to Ogre Game v1.0</h1>");
    $('body').append("<h3>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</h3>");
    $('body').append("<h2>STATS</h2>");   
    $('body').append("<p class ='stats'></p>");
    $("body").append("<button onclick='stats()'>Attack the Ogre!</button>");
    $('body').append('m')
}


function stats(){
    $(".stats").text("HP: " + hp + " // Gold: " + gold + " // Ogre's Slain: " + slain);
}


function attack (){
    if (hp > 0){
        if(Math.random()*100 >gold){ //PLayer wins!
            gold += 10;
            slain += 1;
            $("body").prepend("<p style= 'color: green'>You won! + 10 gold ! </p>");            
        } else {
            gold -= 1;
            hp -= 1;
            $("body").prepend("<p>You Lost!</p>")
        }
    }    
}