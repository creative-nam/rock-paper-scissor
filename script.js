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
            return 'scissor'
    }
}

function playerPlay() {
    let move = parseInt(prompt(`Insert the the number for the move you wish to make:
            [1] Rock
            [2] Paper
            [3] Scissors`, 1))

    return convertMove(move)
}

function computerPlay() {
    let move = parseInt(Math.random() * 3) + 1

    return convertMove(move)
}

const playerSelection =  playerPlay()
const computerSelection = computerPlay()

function getRock(player, computer) {
    if (isRock(player) || isRock(computer)) {
        if (isRock(player) && isRock(computer)) {
            return ['player', 'computer']
        }

        else if (isRock(player)) {
            return ['player']
        }

        else {
            return ['computer']
        }
    }
}

function getPaper(player, computer) {
    if (isPaper(player) || isPaper(computer)) {
        if (isPaper(player) && isPaper(computer)) {
            return ['player', 'computer']
        }

        else if (isPaper(player)) {
            return ['player']
        }

        else {
            return ['computer']
        }
    }    
}

function getScissor(player, computer) {
    if (isScissor(player) || isScissor(computer)) {
        if (isScissor(player) && isScissor(computer)) {
            return ['player', 'computer']
        }

        else if (isScissor(player)) {
            return ['player']
        }

        else {
            return ['computer']
        }
    }
}