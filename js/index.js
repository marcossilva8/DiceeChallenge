var player1 = Math.floor(Math.random() * 6) + 1; // generates a random number from 1 to 6
var player2 = Math.floor(Math.random() * 6) + 1;

document
  .getElementById("imgP1")
  .setAttribute("src", "../images/dice" + player1 + ".svg"); // changes the image path according to the generated number
document
  .getElementById("imgP2")
  .setAttribute("src", "../images/dice" + player2 + ".svg");

if (player1 > player2) { // shows who won or if there was a draw
  document.querySelector("h1").innerHTML = "Player 1 win!";
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 win!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
