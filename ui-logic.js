let moveBtns = document.querySelectorAll('.moveBox')

function convertBtnToCode(btn) {
    let move = btn.id.slice(0,-3)

    return ((move === 'rock')? 1 : (move === 'paper')? 2 : 3)
}

function updateScore(winner = winner) {
    if (!winner) return
    let winnerScore = document.querySelector((convertToPlayer(winner) === 'p')? '#playerScore' : 
        '#computerScore')
    
    winnerScore.textContent++

    if (isGameOver()) displayGameOverMsg()
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

    let winnerMove = (convertToPlayer(winner) === 'p')? convertMove(player) : convertMove(comp)
    let loserMove = (convertToPlayer(winner) === 'p')? convertMove(comp) : convertMove(player)
    
    let msg1 = (convertToPlayer(winner) === 'p')? 'You won!' : 'You lost!'
    let msg2 = `${capitalize(winnerMove)} beats ${loserMove}`

    h2.textContent = msg1
    para.textContent = msg2
}

function play(btn) {
    playerSelection = convertBtnToCode(btn)
    computerSelection = computerPlay()

    winner = whoWon()
    updateIcons()
    displayMsg(winner)
    updateScore(winner)
}

function isGameOver() {
    let playerScore = document.querySelector('#playerScore').textContent
    let compScore = document.querySelector('#computerScore').textContent

    return (Number(playerScore) === 5 || Number(compScore) === 5)
}

function getWinnerTotal() {
    let playerScore = document.querySelector('#playerScore').textContent

    return (Number(playerScore) === 5)? 4 : 5
}

let overlayElem = document.querySelector('#overlay')
function toggleOverlay() {
    (overlayElem.style.display === 'block') ? overlayElem.style.display = 'none' : 
        overlayElem.style.display = 'block'
}

function displayGameOverMsg() {
    let gameOverMsg = document.querySelector('#gameOverMsg')
    let para = gameOverMsg.querySelector('p')

    para.textContent = (convertToPlayer(getWinnerTotal()) === 'p')? 'You won!' : 'You lost!'
    
    toggleOverlay()
}

let playerSelection, computerSelection, winner

moveBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        (isGameOver())? displayGameOverMsg() : 
            play(e.currentTarget)
    })
});

overlayElem.addEventListener('click', toggleOverlay)

function resetAll() {
    let scoreSection = document.querySelector('#score')
    let icons = scoreSection.querySelectorAll('img')
    let scores = scoreSection.querySelectorAll('span')

    let dialogue = document.querySelector('#dialogue')
    let initMsgH2 = dialogue.querySelector('h2')
    let initMsgP = dialogue.querySelector('p')

    icons.forEach(icon => {
        icon.src = 'images/question-mark.png'
    });

    scores.forEach(score => {
        score.textContent = 0
    });

    initMsgH2.textContent = 'Choose your move'
    initMsgP.textContent = 'The first to score 5 points wins the game'
}

let gameOverBtn = document.querySelector('#gameOverBtn')

gameOverBtn.addEventListener('click', resetAll)