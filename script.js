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

function chooseWinner(playerSelection, computerSelection){
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

    
let playerScore = 0
let computerScore = 0
const playerTrack = document.querySelector(".playerScore")
const computerTrack = document.querySelector(".computerScore") 
const playerContent = document.createElement("p")
const computerContent = document.createElement("p")


let handler = function(e){

    

    let playerSelection = e.target.className
    let computerSelection = getComputerChoice()
    let result = chooseWinner(playerSelection, computerSelection)

    switch(result){

        case("win"):
            
            playerScore = playerScore + 1
            playerTrack.textContent = `Player Score: ${playerScore}`
            break;

        case("loss"):
             
            computerScore = computerScore + 1
            computerTrack.textContent = `Computer Score: ${computerScore}`
            break;
        case("draw"):
            console.log("draw")
            break;    
    }

    trackScore(playerScore,computerScore, playerSelection, computerSelection)

}
const buttons = document.querySelectorAll("button")
buttons.forEach(button => button.addEventListener('click', handler));

function trackScore(playerScore, computerScore, playerSelection, computerSelection){

    const container = document.querySelector(".results")
    
    const winnerContent = document.createElement("p")

    playerContent.textContent = `Player Choice: ${playerSelection}`
    computerContent.textContent = `Computer Choice: ${computerSelection}`

    playerContent.classList.add("choice")
    computerContent.classList.add("choice")

    container.appendChild(playerContent)
    container.appendChild(computerContent)

    if (playerScore === 5){
        winnerContent.textContent = "Player Wins"
        container.appendChild(winnerContent)
        finishGame(container,winnerContent)
    } else if(computerScore ===5){
        winnerContent.textContent = "Computer Wins"
        container.appendChild(winnerContent)
        finishGame(container,winnerContent)
    }
}

function finishGame(container,winnerContent){

    const againContent = document.createElement("button")
    againContent.classList.add("again")
    againContent.textContent = "Play Again"
    againContent.addEventListener('click', function(e){

        buttons.forEach(button => button.addEventListener('click', handler))
        playerScore = 0
        computerScore = 0
        playerTrack.textContent = "Player Score: 0"
        computerTrack.textContent = "Computer Score: 0"
        container.removeChild(winnerContent)
        container.removeChild(againContent)
        container.removeChild(playerContent)
        container.removeChild(computerContent)
    })
    container.appendChild(againContent)

    buttons.forEach(button => button.removeEventListener('click', handler))

    
}


