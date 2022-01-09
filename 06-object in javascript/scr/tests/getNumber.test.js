const {getNumber} = require ('../script');

describe('getNumber', () => {
    test('number even', () => {
        expect(getNumber([1,2,3,7,9])).toBe(2)
    })
    test('number odd', () => {
        expect(getNumber([1,2,4,6,8])).toBe(1)
    })
})