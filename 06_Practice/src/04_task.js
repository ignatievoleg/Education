function isEmptyObject (a) {
    if(Object.keys(a).length === 0) {
        return true;
    }
    for(const key in a) {
        if(a[key] !== undefined) {
            return false;
        }
    }
    return true;
}

console.log(isEmptyObject({a:undefined}))

function isEmptyObject2 (a) {
    const filteredObj = JSON.parse(JSON.stringify(a));
    return Object.keys(filteredObj).length === 0

}
console.log(isEmptyObject2({a:1}))