function getSum(x, y) {
    const arr1 = x.split('').map(Number)
    const arr2 = y.split('').map(Number)

    const sum = arr2.map(function (arr2, i) {
        return arr2 + arr1[i];
    });
    return sum.join('');
}

module.exports = getSum;