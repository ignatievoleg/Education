let gameData = {};
let history = [];

    const fromInput = document.querySelector('#from');
    const toInput = document.querySelector('#to');
    const attemptsInput = document.querySelector('#attempts');
    const guessInput = document.querySelector('#guess');

function generate() {
    const from = Number(fromInput.value);
    const to = Number(toInput.value);
    const numberAttempts = Number(attemptsInput.value);

    if ((from > 200 || from < 1) || (to > 200 || to < 1) || (numberAttempts > 15 || numberAttempts < 1)) {
        alert('неправильное условие');
        exit();
        return;
    }


    gameData.attempts = Number(attemptsInput.value);

    document.querySelector('#btn-generate').disabled = true;
    gameData.hiddenNumber = Math.floor(Math.random() * (to - from) + from);


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
    guessInput.value = '';

    let attemptsLeft = Number(gameData.attempts - 1);

    for (let i = 0; i < history.length; i++) {
        attemptsLeft = attemptsLeft - 1;
    }

    let left = gameData.attempts - attemptsLeft;

    if (gameData.hiddenNumber === undefined) {
        return alert('выберите условие');
    }
    if (userValue === gameData.hiddenNumber) {
        return alert('ты выиграл за ' + left + ' попыток');
    }

    history.push(userValue);
    if (history.length >= gameData.attempts) {
        return alert('ты проиграл');
    }
    if (history.length === 1) {
        if (userValue === gameData.hiddenNumber) {
            return alert('ты выиграл ' + left + ' попыток');
        }
        return alert('попробуй еще,осталось ' + attemptsLeft + ' попыток');
    }
    const currentMiss = Math.abs(userValue - gameData.hiddenNumber);
    const previousMiss = Math.abs(history[history.length - 2] - gameData.hiddenNumber);
    if (currentMiss === previousMiss) {
        return alert('ты так же близок, как и в прошлый раз,осталось ' + attemptsLeft + ' попыток');
    }

    if (currentMiss > previousMiss) {
        return alert('холоднее, осталось ' + attemptsLeft + ' попыток');
    }
    return alert('теплее, осталось ' + attemptsLeft + ' попыток');


}

document.querySelector('#btn-generate').addEventListener('click', generate);
document.querySelector('#btn-exit').addEventListener('click', exit);
document.querySelector('#btn-guess').addEventListener('click', guess);

module.exports = {generate, exit, guess, gameData};



