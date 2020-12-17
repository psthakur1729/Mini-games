var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var r1 = "images/dice" + randomNumber1;

var r2 = "images/dice" + randomNumber2;
document.querySelector(".dice .img1").setAttribute("src", r1 + ".png");
document.querySelector(".dice .img2").setAttribute("src", r2 + ".png");

if (r1 < r2) {
  document.querySelector("h1").innerText = "Player2 Wins!!";
} else if (r1 > r2) {
  document.querySelector("h1").innerText = "Player1 Wins!!";
} else {
  document.querySelector("h1").innerText = "Its a Tie.Keep spinnin'";
}
