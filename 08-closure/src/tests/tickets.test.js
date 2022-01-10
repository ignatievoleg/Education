const {tickets} = require('../tickets');

describe('tickets', () => {
    test('check yes', () => {
        expect(tickets([25,50,25,100])).toBe('YES')
    })
    test('check yes', () => {
        expect(tickets([25,25,25,100])).toBe('YES')
    })
    test('check no', () => {
        expect(tickets([25,25,100])).toBe('NO')
    })
    test('check yes', () => {
        expect(tickets([50,25,25,100])).toBe('NO')
    })


})