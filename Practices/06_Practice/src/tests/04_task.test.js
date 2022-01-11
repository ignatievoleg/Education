const {isEmptyObject, isEmptyObject2} = require ('../04_task');

describe('isEmptyObject', () => {
    test('check undefined', () => {
        expect(isEmptyObject({a:undefined})).toBe(true);
    })
    test('check null', () => {
        expect(isEmptyObject({})).toBe(true);
    })
    test('check false', () => {
        expect(isEmptyObject({a:12})).toBe(false);
    })
    test('check null', () => {
        expect(isEmptyObject2({})).toBe(true);
    })
})