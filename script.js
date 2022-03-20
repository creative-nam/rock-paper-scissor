console.log('Hello! Welcome to the rock -> paper -> scissors game')

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

function getScissor(player, computer) {
    if (isScissor(player) || isScissor(computer)) {
        return ((isScissor(player))? 4 : 5)         
    }
}

function isRock(param) {
    return (param === 1)
}

function isPaper(param) {
    return (param === 2)
}

function isScissor(param) {
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
    
    scissor = getScissor(player, computer)
    
    if (rock) {
        if (paper) {
            return paper
        }

        else if (scissor) {
            return rock
        }
    }

    else if (paper) {
        if (scissor) {
            return scissor
        }
    }  
}