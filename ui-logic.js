let rockBtn = document.querySelector('#rockBtn')
let paperBtn = document.querySelector('#paperBtn')
let scissorsBtn = document.querySelector('#scissorsBtn')

rockBtn.addEventListener('click', () => {
    playerSelection = playerPlay(1)
    console.log(play())
})

paperBtn.addEventListener('click', () => {
    console.log('We got this far - paper')
})

scissorsBtn.addEventListener('click', () => {
    console.log('We got this far - scissors')
})