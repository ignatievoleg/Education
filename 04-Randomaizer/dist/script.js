let dataNumber = [];

const inputFrom = document.querySelector('#from');
const inputTo = document.querySelector('#to');
let generateNumber = document.querySelector('#number');

document.querySelector('#btn-generate').addEventListener('click', generate);
document.querySelector('#btn-reset').addEventListener('click', reset);

function generate() {
    const from = Number(inputFrom.value);
    const to = Number(inputTo.value);
    const range = to - from + 1;

    let num = Math.floor((Math.random() * range + from));

    while (dataNumber.includes(num)) {
        num++;

        if (num > to) {
            num = from;
        }
    }

    dataNumber.push(num);
    generateNumber.innerHTML = 'Generated number: ' + num;
    if (dataNumber.length === range) {
        document.querySelector('#btn-generate').disabled = true;
        generateNumber.innerHTML = 'Generated number: ' + num + ' Elements are over';
    }

    if (to <= from) {
        alert('неправильное условие');
        reset();
    }
}

function reset() {
    document.querySelector('#btn-generate').disabled = false;
    dataNumber = [];
    inputFrom.value = '';
    inputTo.value = '';
    generateNumber.innerHTML = 'Generated number: ';
}
