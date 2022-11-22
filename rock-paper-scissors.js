const rpsComputerChoiceDisplay = document.getElementById('computer-choice')
const rpsUserChoiceDisplay = document.getElementById('user-choice')
const rpsResultChoiceDisplay = document.getElementById('rpsResult')
const rpsPossibleChoices = document.querySelectorAll('button.rps-btn')
let rpsUserChoice
let rpsComputerChoice
let rpsResult

rpsPossibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    rpsUserChoice = e.target.id
    rpsUserChoiceDisplay.innerHTML = rpsUserChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1) {
        rpsComputerChoice ='rock'
    }
    if(randomNumber === 2) {
        rpsComputerChoice ='scissors'
    }
    if(randomNumber === 3) {
        rpsComputerChoice ='paper'
    }
    rpsComputerChoiceDisplay.innerHTML = rpsComputerChoice
}

function getResult() {
    const win = (rpsComputerChoice === 'rock' && rpsUserChoice === 'paper')|| //paper
        (rpsComputerChoice === 'paper' && rpsUserChoice === 'scissors')|| //scissors
        (rpsComputerChoice === 'scissors' && rpsUserChoice === 'rock');  //rock

    const lose = (rpsComputerChoice === 'rock' && rpsUserChoice === 'scissors')|| //scissors
        (rpsComputerChoice === 'paper' && rpsUserChoice === 'rock') ||//rock
        (rpsComputerChoice === 'scissors' && rpsUserChoice === 'paper') //paper

    //match null
    if (rpsComputerChoice === rpsUserChoice) {
        rpsResult = 'Its a draw!'
    }
    //cas gagnant
    if (win) {
        rpsResult = 'You win!'
    }
    //cas perdant
    if (lose) {
        rpsResult = 'You lose!'
    }
    rpsResultChoiceDisplay.innerHTML = rpsResult
}