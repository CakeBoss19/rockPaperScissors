const move = ['rock', 'paper', 'scissors'];
let score = 0;
let compScore = 0;

function computerPlay(){
    return move[Math.floor(Math.random() * move.length)];
}

function playRound(userSelection, compSelection){ 
    if (userSelection == compSelection){
        return "Its a tie! Play again!";
    } else if (userSelection == null || ''){
        return "Come on. At least try!";
    } else if (userSelection == 'rock' && compSelection == 'paper'){
        compScore = compScore + 1;
        return 'You lose! Paper covers Rock!';
    } else if (userSelection == 'rock' && compSelection == 'scissors'){
        score = score + 1;
        return 'You win! Rock beats Scissors!';
    } else if (userSelection == 'paper' && compSelection == 'rock'){
        score = score + 1;
        return 'You win! Paper covers Rock!';
    } else if (userSelection == 'paper' && compSelection == 'scissors'){
        compScore = compScore + 1;
        return 'You lose! Scissors cut Paper!';
    } else if (userSelection == 'scissors' && compSelection == 'rock'){
        compScore = compScore + 1;
        return 'You lose! Rock beats Scissors!';
    } else if (userSelection == 'scissors' && compSelection == 'paper'){
        score = score + 1;
        return 'You win! Scissors cut Paper!';
    } else {
        return "Something has gone terribly wrong!";
    }
}

function winner(score, compScore){
    if (score == compScore){
        return 'It\'s a tie. Play again!';
    } else if (score < compScore){
        return 'Oh, no... You lose!';
    } else {
        return 'Congratulations! You win!';
    }
}
function game(){
    for(let i = 0; i < 5; i++){
    let userSelection = prompt('Rock, Paper, or Scissors?', 'rock').toLowerCase();
    let compSelection = computerPlay();
    playRound(userSelection, compSelection);   
}   return winner(score, compScore);
}
console.log(game());
