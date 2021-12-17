let dataNumber = [];


const inputFrom = document.querySelector('#from');
const inputTo = document.querySelector('#to');


document.querySelector("#btn-generate").addEventListener('click', generate);
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
    document.querySelector('#number').innerHTML = num;
    if (dataNumber.length === range) {
        document.querySelector('#btn-generate').disabled = true;
    }
}

function reset() {
    document.querySelector('#btn-generate').disabled = false;

    dataNumber = [];
    inputFrom.value = '';
    inputTo.value = '';
}
