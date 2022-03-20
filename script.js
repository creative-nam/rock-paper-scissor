function convertMove(move) {
    switch (move) {
        case 1:
            return 'rock'
            break

        case 2:
            return 'paper'
            break
        
        case 3:
            return 'scissors'
    }
}

function convertToPlayer(code) {
    code = Number(code)

    if (code < 4 || code > 5) return

    return ((code === 4)? 'p' : 'c')
}

function computerPlay() {
    let move = parseInt(Math.random() * 3) + 1

    return move
}

function getRock(player, computer) {
    if (isRock(player) || isRock(computer)) {
        return ((isRock(player))? 4 : 5)
    }
}

function getPaper(player, computer) {
    if (isPaper(player) || isPaper(computer)) {
        return ((isPaper(player))? 4 : 5)          
    }  
}

function getScissors(player, computer) {
    if (isScissors(player) || isScissors(computer)) {
        return ((isScissors(player))? 4 : 5)         
    }
}

function isRock(param) {
    return (param === 1)
}

function isPaper(param) {
    return (param === 2)
}

function isScissors(param) {
    return (param === 3)
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function  whoWon(player = playerSelection, computer = computerSelection) {
    if (player === computer) {
        return 0
    }

    let rock, paper, scissor
    
    rock = getRock(player, computer)

    paper =  getPaper(player, computer)
    
    scissors = getScissors(player, computer)
    
    if (rock) {
        if (paper) {
            return paper
        }

        else if (scissors) {
            return rock
        }
    }

    else if (paper && scissors) {
        return scissors
    }  
}