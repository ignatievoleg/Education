const {getCookingTime} = require('../script');

describe('getCookingTime', () => {
    test('check 6', () => {
        expect(getCookingTime(6)).toBe(10)
    })
    test('check 5', () => {
        expect(getCookingTime(5)).toBe(5)
    })
    test('check undefined', () => {
        expect(getCookingTime()).toBe(NaN)
    })
})