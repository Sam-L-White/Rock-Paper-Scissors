function getComputerChoice(){
    result = Math.floor(Math.random() * 3)
    switch (result){
        case result = 0:
            return "Rock"
        case result = 1:
            return "Paper"
        case result = 2:
            return "Scissors"
    }
}

console.log(getComputerChoice())