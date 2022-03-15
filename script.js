const selections = ['rock', 'paper', 'scissors'];
const btnR = document.querySelector('#rock');
const btnP = document.querySelector('#paper');
const btnS = document.querySelector('#scissors');
const message_div = document.querySelector('.message');
const userScore_span = document.querySelector('.userScore');
const compScore_span = document.querySelector('.compScore');
let userScore = 0;
let compScore = 0;

function computerPlay(){
    return selections[Math.floor(Math.random() * selections.length)];
}

function win(){
    userScore++;
    userScore_span.textContent = userScore;
    message_div.textContent = 'You win!';
}

function lose(){
    compScore++;
    compScore_span.textContent = compScore;
    message_div.textContent = 'You lose!';
}

function draw(){
    message_div.textContent = 'It\'s a tie!';
}

function game(userSelection){
    const compSelection = computerPlay();
    switch(userSelection + compSelection){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win();
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose();
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissors':
            draw();
            break;
        
    }
} 

btnR.addEventListener('click', () => {
    game('rock');
})

btnP.addEventListener('click', () => {
    game('paper');
})

btnS.addEventListener('click', () => {
    game('scissors');
})