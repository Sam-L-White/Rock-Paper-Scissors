function getComputerChoice(){
    result = Math.floor(Math.random() * 3);
    switch (result){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    loss = "loss"
    win = "win"
    draw = "draw"
    switch (playerSelection.toLowerCase()){ 
        case "rock":
            switch(computerSelection){
                case "paper":
                    return loss;
                case "rock":
                    return draw;
                case "scissors":
                    return win;
            }
        break
        case "paper":
            switch(computerSelection){
                case "scissors":
                    return loss;
                case "paper":
                    return draw;
                case "rock":
                    return win;
            }
        break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    return loss;
                case "scissors":
                    return draw;
                case "paper":
                    return win;
            }
        break;
        default:
            return "Please enter either rock, paper or scissors";
    }        
}

function game(){

    let playerScore = 0
    let computerScore = 0

    for (let x = 0; x < 5; x++){
        
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        switch(result){
            case "win": 
                console.log(`You: ${playerSelection}. Computer: ${computerSelection}. Round Win!`);
                playerScore = playerScore + 1;
            break;
            case "loss":
                console.log(`You: ${playerSelection}. Computer: ${computerSelection}. Round loss!`);
                computerScore = computerScore + 1;
            break;
            case "draw":
                console.log(`You: ${playerSelection}. Computer: ${computerSelection}. Round draw!`);
            break;
        }

    }

    if (playerScore > computerScore){
        console.log(`You: ${playerScore}. Computer: ${computerScore}. Congratulations, you've won the match!`)

    } else if (computerScore > playerScore){
        console.log(`You: ${playerScore}. Computer: ${computerScore}. You've lost the match, please try again!`)
        
    } else{
        console.log(`You: ${playerScore}. Computer: ${computerScore}. It's a draw!`)
    }


}

game()



