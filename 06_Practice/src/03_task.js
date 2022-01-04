function removesDuplicateInAnArray(arr) {
    let result = Array.from(new Set(arr));
    return result;


}

console.log(removesDuplicateInAnArray([1, 5, 2, 3, 4, 3, 2]));

function removesDuplicateInAnArray2 (arr) {
    return Object.keys(arr.reduce((acc, el) => {
        acc[el] = '';
        return acc;
    }, {}));
}


