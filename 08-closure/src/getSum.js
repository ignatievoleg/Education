function getSum(x, y) {

    const arr1 = x.split('');
    const newArr1 = arr1.map(Number)

    const arr2 = y.split('');
    const newArr2 = arr2.map(Number)

    const sum = newArr2.map(function (newArr2, i) {
        return newArr2 + newArr1[i];
    });
    return Number(sum.join(''));
}

console.log(getSum('123','234'))