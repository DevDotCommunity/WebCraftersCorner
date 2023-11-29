'use strict';
let computer = getRandom();
let score = 20;
let highscore = 0;
let end = false;
let value;

document.querySelector(".restart").addEventListener("click",function(){
    computer=getRandom();
    score=20;
    document.querySelector("body").classList.remove("correct");
    document.querySelector(".box").textContent="?";
    document.querySelector("h3").textContent="Start guessing...";
    document.querySelector(".score").textContent=""+score;
    document.querySelector("input").value="";
    document.querySelector(".check").addEventListener("click",theListner);
});


document.querySelector(".check").addEventListener("click",theListner);


function theListner( ) {
    value = Number(document.querySelector("input").value); 
    check();
    document.querySelector(".score").textContent=""+score;   
}
function getRandom() {
    return Math.floor(Math.random() * 20) + 1;
}

function check() {
    if (!value) {
        document.querySelector("h3").textContent = "No number";
    } else if (value < computer) {
        document.querySelector("h3").textContent = "Too low📉";
        score--;
    } else if (value > computer) {
        document.querySelector("h3").textContent = "Too high📈";
        score--;
    } else {
        document.querySelector("h3").textContent = "Correct!!!☑️";
        document.querySelector(".box").textContent=""+computer;
        document.querySelector(".check").removeEventListener("click",theListner);
        setHigh();
        document.querySelector("body").classList.add("correct");
    }
    if(score===0){
        document.querySelector("h3").textContent="You lost the game ❌";
        document.querySelector(".check").removeEventListener("click",theListner);

    }
}

function setHigh(){
    if(highscore<score){
        highscore=score;
        document.querySelector(".highscore").textContent=""+highscore;
    }
}