
function getNameUser() {
    let NameUser = document.getElementById('helloInput').value;
    const helloResultDisplay = document.querySelector('#helloResult')
    if( NameUser === '') {
        helloResultDisplay.textContent = `Give me your name my friend`
    } else {
        helloResultDisplay.textContent = `Hello to you ${NameUser} !`
    }
}