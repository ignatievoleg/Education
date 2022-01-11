const {obj,user,func,myBind} = require ('../05_task');

describe('myBind', () => {
    test('myBind', () => {
        func();
        myBind();
        expect(obj.func()).toBe('Коля');
        expect(obj.myFunc()).toBe('Вася');
    })
})