'use strict';

const dice=document.querySelector('.dice');
const roll=document.querySelector('.btn--roll');
const newGame=document.querySelector('.btn--new');
const hold=document.querySelector('.btn--hold');
const currentPlayer=document.querySelector('.current');
// const score1=document.querySelector('#score--0');
let p1Score=0,p2Score=0;
let currScore=0;
let player=0;
let flag=false;
document.querySelector('.player--'+player).classList.add('player--active');
roll.addEventListener('click',()=>{
    if(flag===true)
        return;
    let randomNumber=Math.floor((Math.random()*6))+1;
    dice.src="dice-"+randomNumber+".png";
    if(randomNumber!=1)
    {
        currScore+=randomNumber;
        document.querySelector('#current--'+player).textContent=currScore;
        document.querySelector('.player--'+player).classList.add('player--active');
        
    }
    else{
        document.querySelector('.player--'+player).classList.remove('player--active');
        document.querySelector('#current--'+player).textContent=0;
        player=1-player;
        document.querySelector('.player--'+player).classList.add('player--active');
        currScore=0;
    }
});

hold.addEventListener('click',()=>{
    document.querySelector('.player--'+player).classList.remove('player--active');
    let totalScore=document.querySelector('#score--'+player);
    let x=Number(totalScore.textContent)+currScore;
    document.querySelector('#current--'+player).textContent=0;
    currScore=0;
    totalScore.textContent=x;
    if(x>=100)
    {
        flag=true;
        document.querySelector('.player--'+player).classList.add('player--winner');
        return;
    }
    player=1-player;
    document.querySelector('.player--'+player).classList.add('player--active');
    document.querySelector('#current--'+player).textContent=0;
});

newGame.addEventListener('click',()=>{
    location.reload();
    return false;
});

