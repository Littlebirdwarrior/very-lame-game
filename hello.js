const containOnlySpaces = /\s/g
const containNumber = /^[\d]{1,10}$/g
const containOnlyLetters = /^[a-z-A-Z-àÀçÇéÉèÈïÏöÖùÙüÜ]{1,10}$/g
const toLong = /^[\w\d\W\D]{11,}$/g
const containSpecial = /[&@\-!+$%€*_°]/g

function getNameUser() {
    let NameUser = document.getElementById('helloInput').value;
    const helloResultDisplay = document.querySelector('#helloResult')
    if ( NameUser === ''||NameUser === undefined || NameUser.match(containOnlySpaces)) {
        helloResultDisplay.textContent = `Give me your name my friend !`
    } else if (NameUser.match(containNumber)) {
        helloResultDisplay.textContent = `You're a Robot ${NameUser} ! `
    } else if (NameUser.match(containOnlyLetters)) {
        helloResultDisplay.textContent = `Hello to you ${NameUser} !`
    } else if (NameUser.match(toLong)) {
        helloResultDisplay.textContent = `That's a very long name...`
    } else if (NameUser.match(containSpecial)) {
        helloResultDisplay.textContent = `Come on! That's not a name.`
    } else {
        helloResultDisplay.textContent = `Hello to you.`
    }
}