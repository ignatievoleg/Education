const {removesDuplicateInAnArray, removesDuplicateInAnArray2} = require('../03_task');

describe('removesDuplicateInAnArray', () => {
    test('removesDuplicateInAnArray', () => {
        expect(removesDuplicateInAnArray([1, 5, 2, 3, 4, 3, 2])).toStrictEqual([1, 5, 2, 3, 4]);
    })
    test('removesDuplicateInAnArray2', () => {
        expect(removesDuplicateInAnArray2([1, 5, 2, 3, 4, 3, 2])).toStrictEqual([ '1', '2', '3', '4', '5' ]);
    })
})
