function removesDuplicateInAnArray(arr) {
    return Array.from(new Set(arr));

}

function removesDuplicateInAnArray2 (arr) {
    return Object.keys(arr.reduce((acc, el) => {
        acc[el] = '';
        return acc;
    }, {}));
}

module.exports = {removesDuplicateInAnArray,removesDuplicateInAnArray2};


