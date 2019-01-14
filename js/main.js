const summary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerChoice: '',
    computerChoice: '',
}

const pictures = [...document.querySelectorAll('.select img')];

const selectPicture = (e) => {
    game.playerChoice = e.target.dataset.option;

    pictures.forEach(picture => picture.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 0 4px purple';
}

pictures.forEach(picture => picture.addEventListener('click', selectPicture));