const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', function() {
    playGame('rock')
})
paperButton.addEventListener('click', function() {
    playGame('paper')
})
scissorsButton.addEventListener('click', function() {
    playGame('scissors')
})


const compChoice = () => {
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const determineWinner = (user, comp) => {
    if (user === comp) {
        return 'Tie';
    }
    else if (user === 'rock') {
        if (comp === 'paper') {
            return 'You Lose';
        }
        else if (comp === 'scissors'){
            return 'You Win';
        }
    }
    else if (user === 'paper') {
        if (comp === 'scissors') {
            return 'You Lose';
        }
        else if (comp === 'rock') {
            return 'You Win';
        }
    }
    else if (user === 'scissors') {
        if (comp === 'rock') {
            return 'You Lose';
        }
        else if (comp === 'paper') {
            return 'You Win'
        }
    }
}


const playGame = (userChoice) => {
    let computerChoice = compChoice();

    let computerChoiceElement = document.getElementById('comp');
    computerChoiceElement.innerText = computerChoice;
    
    let resultElement = document.getElementById('results');
    resultElement.innerText = '';
    
    let result = determineWinner(userChoice, computerChoice);
    resultElement.innerText = result;
}



