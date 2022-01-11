class MyString {
    constructor() {
    }

    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        let arrFromStr = str.split('');
        arrFromStr[0] = arrFromStr[0].toUpperCase();
        return arrFromStr.join('');
    }

    ucWords(str) {
        let arrStr = str.split(' ');
        let strArr = [];
        for(let i = 0; i < arrStr.length; i++) {
            let indexArr = arrStr[i];
            let newElement = indexArr[0].toUpperCase() + indexArr.slice(1);
            strArr.push(newElement);
        }
        return strArr.join(' ');
    }
}

let myString = new MyString();

module.exports = {myString};