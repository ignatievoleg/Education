/*1)Cоздать функцию, которая возвращает true или false, в зависимости от того,
 может ли сумма любых двух чисел из массива быть равной заданному значению.*/

function sumNumber(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === value) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumNumber([3, 4, 5, 0, 6, 7, 8, 9], 5));

/*2) Напишите функцию, которая преобразует глубокий массив в одномерный.Не используйте array.flat()
Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]*/

function array(arr) {

    return arr.join().split(',').map(Number);
}

console.log(array([1, 2, [3, 4, [5]]]));

function array2(arr) {
    let i = 0;
    while(i < arr.length) {
        arr = arr.reduce(function(a, b) {
            return a.concat(b);
        },[]);
        i++;
    }
    return arr;
}

console.log(array2([1, 2, [3, 4, [5]]]));


/*3)Напишите функцию, которая разделяет массив на части заданного размера.
    Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/

function arraySplit (array,size) {
    const result = [];
    let index = 0;

    while (index < array.length) {
        result.push(array.slice(index, size + index));
        index += size;
    }
    return result;
}

console.log(arraySplit([1,2,3,4,5,6],2));

/*4) Напишите функцию, которая поверхностно сравнивает два объекта.
Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true*/


function comparison(objA,objB) {
    let result = true;
    for (let key in objA) {
        if (!objB.hasOwnProperty(key) || objA[key] !== objB[key]) {
            result = false;
        }
    }
    return result
}

console.log(comparison({ a: 2, b: 1 }, { a: 1, b: 1 }));





