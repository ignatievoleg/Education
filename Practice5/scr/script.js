/*1.Составьте алгоритм, который считает, сколько времени вам нужно на
приготовление яиц.
    Правила:
-Яйца варить 5 минут
-Вместительность емкости не более 5 яиц одновременно*/

function getCookingTime(eggsAmount) {
    return  Math.ceil(eggsAmount / 5) * 5;
}




/*2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
одного. Тебе нужно его найти.
*/
function getNumber(array) {
    let oddArray = array.filter(el => el % 2 !== 0);
    let evenArray = array.filter(el => el % 2 === 0);

    if (oddArray.length < evenArray.length) {
        return oddArray[0];
    } else {
        return evenArray[0];
    }


}



/*3. Принимая массив объектов и случайную строку. У объектов может
быть ключ: «title» с разными значениями. Создайте алгоритм, который
фильтрует массив, заданный как первый параметр, и возвращает массив
объектов, которые содержат в своих заголовках заданную строку в
качестве второго параметра (без учета регистра).*/


function findTitle(array, string) {
    const str = string.toLowerCase();

    return array.filter(el => {
        if (el.title) {
            return el.title.toLowerCase().includes(str);
        }
        return false;
    })
}

let arr = [{
    title: 'Some title1'
}, {
    title: 'I like JS'
}, {
    user: 'This obj does not have key title js'
}, {
    title: 'Js - is the best!'
}];


/*4Принимая строку, ваша функция должна вернуть обьект, в котором
ключи – символы строки, значение – количество повторений символов в
строке*/
function countCharacters(string) {
    const str = string.toLowerCase().split('');

    return str.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {})


}



/*5 Принимая число, ваша функция должна найти следующий
положительный палиндром большего размера.
*/

function getNextPalindrome(number) {

    for (let i = number + 1; ; i++) {
        let str = String(i);
        let isPalindrome = str === str.split('').reverse().join('');
        if (isPalindrome) {
            return i;
        }
    }

}



module.exports = {getNextPalindrome, countCharacters};





