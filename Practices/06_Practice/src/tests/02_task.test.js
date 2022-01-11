const {deepEquality} = require('../02_task');

describe('deepEquality', () => {
    test('deepEquality', () => {
        expect(deepEquality({ a: 1, b: { c: 1,d:{o:1} } },
            { a: 1, b: { c: 1,d:{a:1} } })).toStrictEqual(false);
    })
    test('check length', () => {
        expect(deepEquality({  b: { c: 1,d:{o:1} } },
            { a: 1, b: { c: 1,d:{a:1} } })).toStrictEqual(false);
    })
    test('check length', () => {
        expect(deepEquality({  b: { c: 1,d:{o:1} } },
            { a: 1, b: { c: 1,d:{a:1} } })).toStrictEqual(false);
    })
    test('check true', () => {
        expect(deepEquality({  a:1, b: { c: 1,d:{a:1} } },
            { a: 1, b: { c: 1,d:{a:1} } })).toStrictEqual(true);
    })
})