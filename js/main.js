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

const whoWin = document.querySelector(`span[data-summary="who-win"]`);
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

// comparing choices
const chompareChoice = (player, ai) => {
    if (player === ai) {
        return 'draw';
    } else if ((player === 'nożyczki' && ai === 'papier') || (player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki')) {
        return 'win';
    } else {
        return 'loss';
    }
};

// showing results
const showResult = (player, ai, result) => {
    document.querySelector(`span[data-summary="your-choice"]`).textContent = player;
    document.querySelector(`span[data-summary="ai-choice"]`).textContent = ai;
    document.querySelector('.numbers span').textContent = ++summary.numbers;

    if (result === 'draw') {
        whoWin.textContent = 'Remis :|';
        whoWin.style.color = 'orange';
        document.querySelector('.draws span').textContent = ++summary.draws;
    } else if (result === 'win') {
        whoWin.textContent = 'Wygrałeś !!! :)';
        whoWin.style.color = 'green';
        document.querySelector('.wins span').textContent = ++summary.wins;
    } else if (result === 'loss') {
        whoWin.textContent = 'Przegrałeś :(';
        whoWin.style.color = 'red';
        document.querySelector('.losses span').textContent = ++summary.losses;
    }
};

const resetChoices = () => {
    document.querySelector(`img[data-option="${game.playerChoice}"]`).style = '';
    game.playerChoice = '';
    game.computerChoice = '';
};

// implementation
const startGame = () => {
    if (game.playerChoice == '') return alert('wybierz dłoń!!!!');

    game.computerChoice = computerPicture();
    const result = chompareChoice(game.playerChoice, game.computerChoice);

    showResult(game.playerChoice, game.computerChoice, result);
    resetChoices();
};

pictures.forEach(picture => picture.addEventListener('click', selectPicture));
document.querySelector('.start').addEventListener('click', startGame);