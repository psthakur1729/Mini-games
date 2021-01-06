const randomNumber = Math.floor(Math.random() * 20) + 1;
let highScore=0;

let score = 5;
let flag=false;
document.querySelector('.check').addEventListener('click', function () {
    let userInput = Number(document.querySelector('.guess').value);
    if (score <=1) {
        document.querySelector('.message').textContent = "💥You Lose!!";
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.score').textContent = 0;
        return;
    }
    if(flag)
        return;
    if (userInput > 0 && userInput <= 20) {

        if (userInput < randomNumber) {
            document.querySelector('.message').textContent = "Too low";
            document.querySelector('.score').textContent = --score;
        } else if (userInput > randomNumber) {
            document.querySelector('.message').textContent = "Too high";
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = "🎆🎆Congrtulations you guessed it right!";
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').textContent=String(randomNumber);
            document.querySelector('.number').style.fontWeight="bold";
            document.querySelector('.score').textContent = score;
            highScore=Math.max(highScore,score);
            document.querySelector('.highscore').textContent=highScore;
            flag=true;
        }

    } else
        document.querySelector('.message').textContent = "Make a valid move !!";
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = "#222";
    score=5;
    document.querySelector('.guess').value="";
    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent = score;
    flag=false;

});