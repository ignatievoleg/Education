const {countCharacters} = require ('../script');

describe('countCharacters', () => {
    test('countCharacters', () => {
        expect(countCharacters('cabana')).toStrictEqual({a:3,c:1,n:1,b:1})
    })
})