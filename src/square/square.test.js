const square = require('./square.js')

describe('square', () => {
    test('correct value', () => {
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()
    })
})