const {myString} = require ('../MyString');

describe('MyString', () => {
    test('check reverse', () => {
        expect(myString.reverse('aaaddd')).toBe('dddaaa')
    })
    test('check ucFirst', () => {
        expect(myString.ucFirst('aaaddd')).toBe('Aaaddd')
    })
    test('check ucWords', () => {
        expect(myString.ucWords('abcde abcde abcde')).toBe('Abcde Abcde Abcde')
    })

})