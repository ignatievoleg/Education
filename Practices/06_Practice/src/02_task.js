function deepEquality(a, b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
        return false;
    }

    for (const key in a) {
        if (typeof a[key] === 'object' && typeof b[key] === 'object') {
            if(deepEquality(a[key], b[key]) === false) {
                return false;
            }
        } else if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

console.log(deepEquality( { a: 1, b: { c: 1,d:{o:1} } }, { a: 1, b: { c: 1,d:{a:1} } }))