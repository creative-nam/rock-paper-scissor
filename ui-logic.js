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

function updateIcons(player = playerSelection, comp = computerSelection) {
    let playerIcon = document.querySelector('#playerIcon')
    let compIcon = document.querySelector('#computerIcon')

    playerIcon.src = `images/${convertMove(player)}.png`
    compIcon.src = `images/${convertMove(comp)}.png`    
}

let playerSelection, computerSelection, winner

rockBtn.addEventListener('click', () => { 
    playerSelection = convertBtnToCode(rockBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
        comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
    updateIcons()
})

paperBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(paperBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
    comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
    updateIcons()
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(scissorsBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
    comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
    updateIcons()
})