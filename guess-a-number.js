
/*Je génère un chiffre aléatoire*/
const tresor = Math.floor(Math.random() * 11)
console.log(tresor)

function getChiffreUser() {
    let chiffreUser = (document.getElementById("gan-input").value) * 1; //convertir ma string en number
    console.log(chiffreUser)
    //mes autres fonctions
    removeClassActif()
    verifyChiffreUser(chiffreUser)
}


function verifyChiffreUser(chiffreUser) {
    if (chiffreUser <= 0 || chiffreUser > 10) {
        console.log('ce n\'est pas compris entre 1 et 10')
        let foolButton = document.getElementById('fool')
        foolButton.classList.add("actif")
    } else if (chiffreUser < tresor) {
        console.log('Augmentez votre chiffre')
        let moreButton = document.getElementById('more')
        moreButton.classList.add("actif")
    } else if (chiffreUser > tresor) {
        console.log('Diminuez votre chiffre')
        let lessButton = document.getElementById('less')
        lessButton.classList.add("actif")
    } else if (chiffreUser === tresor) {
        console.log('Bravo vous avez deviné')
        let wonButton = document.getElementById('won')
        wonButton.classList.add("actif")
    } else {
        console.log('Vous n\'avez pas taper un nombre')
        let foolButton = document.getElementById('fool')
        foolButton.classList.add("actif")
    }
}

removeClassActif = () => {
    Array.from(document.getElementsByClassName('actif')).forEach((el) => el.classList.remove('actif'));
}

