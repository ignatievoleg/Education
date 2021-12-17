let gameData = {};
let dataNumber = [];


const inputFrom = document.querySelector('#from');
const inputTo = document.querySelector('#to');


document.querySelector("#btn-generate").addEventListener('click', generate);
document.querySelector('#btn-reset').addEventListener('click', reset);


function generate() {
    const from = Number(inputFrom.value);
    const to = Number(inputTo.value);

    gameData.randomNum = Math.floor((Math.random() * (to - from + 1) + from));

    let num = gameData.randomNum;

    document.querySelector('#number').innerHTML = num;
    /* document.querySelector('#btn-generate').disabled = true;*/

    dataNumber.push(num);

    if (gameData.includes(num)) {

    }
}

function reset() {
    document.querySelector('#btn-generate').disabled = false;

    gameData = {};
    dataNumber = [];
    inputFrom.value = '';
    inputTo.value = '';
}
