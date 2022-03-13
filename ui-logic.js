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

function displayMsg(winner = winner, player = playerSelection, comp = computerSelection) {
    let dialogue = document.querySelector('#dialogue')
    let h2 = dialogue.querySelector('h2')
    let para = dialogue.querySelector('p')

    if (!winner || player === comp) {
        let move = convertMove(player)

        h2.textContent = `It's a tie!`
        para.textContent = `${capitalize(move)} ties with ${move}`

        return
    }

    let winnerMove = (winner === 4)? convertMove(player) : convertMove(comp)
    let loserMove = (winner === 4)? convertMove(comp) : convertMove(player)
    
    let msg1 = (winner === 4)? 'You won!' : 'You lost!'
    let msg2 = `${capitalize(winnerMove)} beats ${loserMove}`

    h2.textContent = msg1
    para.textContent = msg2
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
    displayMsg(winner)
})

paperBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(paperBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
    comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
    updateIcons()
    displayMsg(winner)
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(scissorsBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
    comp: ${computerSelection}`)

    winner = whoWon()
    updateScore(winner)
    updateIcons()
    displayMsg(winner)
})