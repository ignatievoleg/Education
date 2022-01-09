document.querySelector = jest.fn((selector)=> {
    const obj = {
        '#from':'7',
        '#to':'10',
        '#attempts': '3'
    }
    return {addEventListener: () => {},
    value:obj[selector]}
})
global.Math.random =jest.fn(() => {
    return 1;
})

const {generate, gameData} = require ('../script');


describe('generate', () => {
    test('', () => {
        generate()
        expect(gameData.attempts).toBe(3)
        expect(gameData.hiddenNumber).toBe(10)
        expect(global.Math.random).toHaveBeenCalled()

    })

})