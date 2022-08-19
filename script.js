function getComputerChoice(){
    result = Math.floor(Math.random() * 3)
    switch (result){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    loss = "You lose! Try Again."
    win = "You win! Well done."
    draw = "It's a draw!"
    switch (playerSelection.toLowerCase()){ 
        case "rock":
            switch(computerSelection){
                case "paper":
                    return loss
                case "rock":
                    return draw
                case "scissors":
                    return win
            }
        break
        case "paper":
            switch(computerSelection){
                case "scissors":
                    return loss
                case "paper":
                    return draw
                case "rock":
                    return win
            }
        break
        case "scissors":
            switch(computerSelection){
                case "rock":
                    return loss
                case "scissors":
                    return draw
                case "paper":
                    return win
            }
        break
        default:
            return "Please enter either rock, paper or scissors"
    }        
}

const playerSelection = "green";
const computerSelection = getComputerChoice()
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))