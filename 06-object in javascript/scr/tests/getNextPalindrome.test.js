const {getNextPalindrome} = require('../script');

describe('scripts', () => {
    test('getNextPalindrome', () => {
        const res = getNextPalindrome(99);
        expect(res).toBe(101);
    })
    test('return next palindrome', () => {
        const res = getNextPalindrome(24);
        expect(res).toBe(33);
    })

});
