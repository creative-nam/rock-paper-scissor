let rockBtn = document.querySelector('#rockBtn')
let paperBtn = document.querySelector('#paperBtn')
let scissorsBtn = document.querySelector('#scissorsBtn')

function convertBtnToCode(btn) {
    let move = btn.id.slice(0,-3)

    return ((move === 'rock')? 1 : (move === 'paper')? 2 : 3)
}

function updateScore(winner = winner) {
    if (!winner) return
    let winnerScore = document.querySelector((winner === 4)? '#playerScore' : 
        '#computerScore')
    
    winnerScore.textContent++
}

let playerSelection, computerSelection, winner

rockBtn.addEventListener('click', () => { 
    playerSelection = convertBtnToCode(rockBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
        comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
})

paperBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(paperBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
    comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(scissorsBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
    comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
})