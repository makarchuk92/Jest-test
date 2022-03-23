const validateValue = require('./validateValue')



describe('validateValue', () => {
    test('correct value', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('less value', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('more value', () => {
        expect(validateValue(101)).toBe(false)
    })
    test('limit value bottom', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('limit value top', () => {
        expect(validateValue(100)).toBe(true)
    })
})