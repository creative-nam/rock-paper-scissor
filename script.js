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
