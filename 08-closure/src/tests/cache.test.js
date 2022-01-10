const {cachedTest} = require ('../cache');

describe('cachedTest', () => {
    test('test', () => {
        expect(cachedTest(4,5)).toBe(9)
    })
    test('cache', () => {
        expect(cachedTest(4,5)).toBe(9+'-cached')
    })
    test('cache', () => {
        expect(cachedTest(4,6)).toBe(10)
    })

})
