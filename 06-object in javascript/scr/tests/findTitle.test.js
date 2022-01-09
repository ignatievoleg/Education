const {findTitle} = require('../script');

describe('findTitle', () => {
    test('findTitle', () => {
        let arr = [{
            title: 'Some title1'
        }, {
            title: 'I like JS'
        }, {
            user: 'This obj does not have key title js'
        }, {
            title: 'Js - is the best!'
        }];

        expect(findTitle(arr,'js')).toStrictEqual([{ title: 'I like JS'}, { title: 'Js - is the best!' }])
    })
})