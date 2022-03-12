let rockBtn = document.querySelector('#rockBtn')
let paperBtn = document.querySelector('#paperBtn')
let scissorsBtn = document.querySelector('#scissorsBtn')

function convertBtnToCode(btn) {
    let move = btn.id.slice(0,-3)

    return ((move === 'rock')? 1 : (move === 'paper')? 2 : 3)
}

let playerSelection, computerSelection 

rockBtn.addEventListener('click', () => { 
    playerSelection = convertBtnToCode(rockBtn)
    computerSelection = computerPlay()
    
    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
        comp: ${computerSelection}`)
})

paperBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(paperBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(playerSelection, computerSelection)}
    comp: ${computerSelection}`)
})

scissorsBtn.addEventListener('click', () => {
    playerSelection = convertBtnToCode(scissorsBtn)
    computerSelection = computerPlay()

    console.log(`winner: ${whoWon(convertBtnToCode(scissorsBtn))}
    comp: ${computerSelection}`)
})