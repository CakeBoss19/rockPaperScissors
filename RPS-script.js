const move = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return move[Math.floor(Math.random() * move.length)];
}

function playRound(userSelection, compSelection){ 
    if (userSelection == compSelection){
        return "Its a tie! Play again!";
    } else if (userSelection == null || ''){
        return "Come on. At least try!";
    } else if (userSelection == 'rock' && compSelection == 'paper'){
        return 'You lose! Paper covers Rock!';
    } else if (userSelection == 'rock' && compSelection == 'scissors'){
        return 'You win! Rock beats Scissors!';
    } else if (userSelection == 'paper' && compSelection == 'rock'){
        return 'You win! Paper covers Rock!';
    } else if (userSelection == 'paper' && compSelection == 'scissors'){
        return 'You lose! Scissors cut Paper!';
    } else if (userSelection == 'scissors' && compSelection == 'rock'){
        return 'You lose! Rock beats Scissors!';
    } else if (userSelection == 'scissors' && compSelection == 'paper'){
        return 'You win! Scissors cut Paper!';
    } else {
        return "Something has gone terribly wrong!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
    let userSelection = prompt('Rock, Paper, or Scissors?', 'rock').toLowerCase();
    let compSelection = computerPlay();
    console.log(userSelection);
    console.log(compSelection);
    console.log(playRound(userSelection, compSelection));
    }
}

 console.log(game());