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
    if (rpsComputerChoice === rpsUserChoice) {
        rpsResult = 'its a draw!'
    }
    //rock
    if (rpsComputerChoice === 'rock' && rpsUserChoice === 'paper') {
        rpsResult = 'you win!'
    }
    if (rpsComputerChoice === 'rock' && rpsUserChoice === 'scissors') {
        rpsResult = 'you lose!'
    }
    //paper
    if (rpsComputerChoice === 'paper' && rpsUserChoice === 'rock') {
        rpsResult= 'you win!'
    }
    if (rpsComputerChoice === 'paper' && rpsUserChoice === 'scissors') {
        rpsResult = 'you lose!'
    }
    //scissors
    if (rpsComputerChoice === 'scissors' && rpsUserChoice === 'paper') {
        rpsResult = 'you win!'
    }
    if (rpsComputerChoice === 'scissors' && rpsUserChoice === 'rock') {
        rpsResult = 'you lose!'
    }
    rpsResultChoiceDisplay.innerHTML = rpsResult
}