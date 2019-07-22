var randomNumber1 = Math.floor(Math.random()*6)+1; //random number 1-6

// Player 1
var randomDiceImage = "dice" + randomNumber1 + ".png"; // random dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage; // random images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


// Player 2
var randomNumber2 = Math.floor(Math.random()*6)+1; //random number 1-6
var randomDiceImage = "dice" + randomNumber2 + ".png"; // random dice1.png-dice6.png
var randomImageSource2 = "images/" + randomDiceImage; // random images/dice1.png-images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// for winning status
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player 1 Wins !";
} else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 Wins ! 🚩";
} else {
  document.querySelector("h1").innerHTML="Draw !";
}
