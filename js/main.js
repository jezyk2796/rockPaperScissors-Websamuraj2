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

// pictures selection
const selectPicture = (e) => {
    game.playerChoice = e.target.dataset.option;

    pictures.forEach(picture => picture.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 0 4px purple';
};

// computer selects the picture
const computerPicture = () => {
    return pictures[Math.floor(Math.random() * 3)].dataset.option;
};

const startGame = () => {
    if (game.playerChoice == '') return alert('wybierz dłoń!!!!');

    game.computerChoice = computerPicture();
};

pictures.forEach(picture => picture.addEventListener('click', selectPicture));
document.querySelector('.start').addEventListener('click', startGame);