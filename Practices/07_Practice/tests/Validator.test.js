const {validator} = require ('../Validator');

describe('validator', () => {
    test('check isDate - true', () => {
        expect(validator.isDate('12.05.2020')).toBe(true);
    })
    test('check isDate - false', () => {
        expect(validator.isDate('12.df.1223')).toBe(false);
    })
    test('check isPhone true', () => {
        expect(validator.isPhone('+38 (098) 99-99-123')).toBe(true);
    })
    test('check isPhone false', () => {
        expect(validator.isPhone('+38 (044) 99-99-123')).toBe(false);
    })
    test('check isEmail', () => {
        expect(validator.isEmail('jhsd_ffsdkjgf@gmail.com')).toBe(true);
    })
    test('check isDomain', () => {
        expect(validator.isDomain('jhsd_ffsdkjgf@gmail.com')).toBe(false);
    })
})