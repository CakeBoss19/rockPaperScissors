const selections = ['r', 'p', 's'];
const r = document.getElementById('rock');
const p = document.getElementById('paper');
const s = document.getElementById('scissors');
const userScore_div = document.getElementById('user-score');
const compScore_div = document.getElementById('comp-score');
const message_div = document.getElementById('message');
const userMain_div = document.getElementById('user-main');
const compMain_div = document.getElementById('comp-main');
const scoreBoard = document.getElementById('scoreboard');
const selection = document.querySelectorAll('.selection');
const nextMatch_btn = document.getElementById('next-match')

let userScore = 0;
let compScore = 0;

let userMain = 0;
let compMain = 0;

function newRound(){
    if(userScore == 5){
       userMain++; 
       userMain_div.textContent = userMain;
    } else if(compScore == 5){
        compMain++
        compMain_div.textContent = compMain;
    };
    restartRound();
}

function computerPlay(){
    return selections[Math.floor(Math.random() * selections.length)];
}

function win(){
    userScore++;
    userScore_div.textContent = userScore;
    message_div.textContent = 'You win';
    if(userScore == 5){
        scoreBoard.style.borderColor = 'green';
        scoreBoard.style.borderWidth = '6px';
        selection.forEach((selector) => {
            selector.disabled = 'true';
        });
        nextMatch_btn.style.visibility = 'visible';
        message_div.textContent = 'Play again?'
    }
}

function lose(){
    compScore++;
    compScore_div.textContent = compScore;
    message_div.textContent = 'You lose';
    if(compScore == 5){
        scoreBoard.style.borderColor = 'red';
        scoreBoard.style.borderWidth = '6px';
        selection.forEach((selector) => {
            selector.disabled = 'true';
        });
        nextMatch_btn.style.visibility = 'visible';
        message_div.textContent = 'Play again?'
    }
}

function draw(){
    message_div.textContent = 'Draw';
}

function game(userSelection){
    const compSelection = computerPlay();
    switch(userSelection + compSelection){
        case 'rs':
        case 'pr':
        case 'sp':
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            break;   
    }
}

function restartRound(){
    userScore = 0;
    compScore = 0;
    message_div.textContent = 'Make your move'
    userScore_div.textContent = userScore;
    compScore_div.textContent = compScore;
    scoreBoard.style.borderColor = 'revert';
    scoreBoard.style.borderWidth = 'revert';
    nextMatch_btn.style.visibility = 'hidden';
    selection.forEach((selector) => {
        selector.disabled = false;
    })
}

r.addEventListener('click', () => {
    game('r');
})

p.addEventListener('click', () => {
    game('p');
})

s.addEventListener('click', () => {
    game('s');
})

nextMatch_btn.addEventListener('click', () => {
    newRound();
})