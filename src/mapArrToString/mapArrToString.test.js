const mapArrToString = require('./mapArrToString')

describe('mapArrToString', () => {
    test('correct value', () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('other value', () => {
        expect(mapArrToString([1, 2, 3, null, undefined, 'test'])).toEqual(['1', '2', '3'])
    })
    test('empty array', () => {
        expect(mapArrToString([])).toEqual([])
    })
    test('negation', () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4])
    })
})

