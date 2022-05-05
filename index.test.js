const { filterPositiveAndSortList } = require("./index.js");

describe('sort phase', () => {
    test('should filter & sort positive integers', () => {
        const list = [-1, 10, 3, 0, -4, 2, 0];
        const expected = [2, 3, 10];
        expect(filterPositiveAndSortList(list)).toEqual(expected);
    });
})
