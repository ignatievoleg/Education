const {intersectionOfObjects} = require ('../01_task');

describe( 'intersectionOfObjects', () => {
    test ( 'intersection object', () => {
        expect(intersectionOfObjects({ a: 1, b: 2 }, { c: 1, b: 2 })).toEqual( { b: 2 })
    })
})