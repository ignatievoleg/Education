let gameData = {};
let history = [];

const fromInput = document.querySelector('#from');
const toInput = document.querySelector('#to');
const attemptsInput = document.querySelector('#attempts');
const guessInput = document.querySelector('#guess');


function generate() {
    const from = Number(fromInput.value);
    const to = Number(toInput.value);

    gameData.attempts = Number(attemptsInput.value);

    document.querySelector('#btn-generate').disabled = true;
    gameData.hiddenNumber = Math.floor(Math.random() * (to - from) + from);
    console.log(gameData.hiddenNumber)
}

function exit() {
    document.querySelector('#btn-generate').disabled = false;
    gameData = {};
    history = [];
    fromInput.value = '';
    toInput.value = '';
    attemptsInput.value = '';
    guessInput.value = '';

}

function guess() {
    const userValue = Number(guessInput.value);

    history.push(userValue);
    if (history.length > gameData.attempts) {
        return alert('ты проиграл');
    }
    if (history.length === 1) {
        if (userValue === gameData.hiddenNumber) {
            return alert('ты выиграл');
        }
        return alert('попробуй еще');
    }
    const currentMiss = Math.abs(userValue - gameData.hiddenNumber);
    const previousMiss = Math.abs(history[history.length - 2] - gameData.hiddenNumber);
    if(currentMiss === previousMiss) {
        return alert('ты так же близок, как и в прошлый раз');
    }
    if(currentMiss > previousMiss) {
        return alert('холоднее');
    }
    return alert('теплее');
}

document.querySelector('#btn-generate').addEventListener('click', generate);
document.querySelector('#btn-exit').addEventListener('click', exit);
document.querySelector('#btn-guess').addEventListener('click', guess);

