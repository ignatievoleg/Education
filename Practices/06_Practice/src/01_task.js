function intersectionOfObjects (firstObj, secondObj)  {
    const firstObjKeys = Object.keys(firstObj);

    return firstObjKeys.reduce((acc, key) => {
        if (firstObj[key] === secondObj[key] && firstObj[key] !== undefined ) {
            acc[key] = firstObj[key];
        }
        return acc;
    }, {});
}

module.exports = {intersectionOfObjects};