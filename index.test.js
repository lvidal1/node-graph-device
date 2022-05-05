const { filterPositiveAndSortList, filterNegativeAndSortList, filterZeros } = require("./index.js");

describe('sort phase', () => {
    test('should filter & sort positive integers', () => {
        const list = [-1, 10, 3, 0, -4, 2, 0];
        const expected = [2, 3, 10];
        expect(filterPositiveAndSortList(list)).toEqual(expected);
    });
    test('should filter & sort negative integers', () => {
        const list = [-1, 10, 3, 0, -4, 2, -3];
        const expected = [-4, -3, -1];
        expect(filterNegativeAndSortList(list)).toEqual(expected);
    });
    test('should filter zeros', () => {
        const list = [-1, 0, 3, 0, -4, 0, -3];
        const expected = [0, 0, 0];
        expect(filterZeros(list)).toEqual(expected);
    });
})
