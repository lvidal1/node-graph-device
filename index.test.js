const { filterPositiveAndSortList, filterNegativeAndSortList, filterZeros, buildList, generateRenderList, createLayoutRow } = require("./index.js");

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

describe('build phase', () => {
    test('should receive partials and create new ordered list', () => {
        const positives = [10, 3, 2];
        const negatives = [-1, -4];
        const zeros = [0, 0];
        const expected = [10, 3, 2, 0, 0, -1, -4];
        expect(buildList(positives, negatives, zeros)).toEqual(expected);
    });
    test('should generate a ordered list for rendering', () => {
        const list = [-1, 10, 3, 0, -4, 2, 0];
        const expected = [2, 3, 10, 0, 0, -4, -1];
        expect(generateRenderList(list)).toEqual(expected);
    });
})


describe('print phase', () => {
    test('should create the first layout row', () => {
        const list = [7, 0, -2];
        const expected = " 7 ** **";
        expect(createLayoutRow(list, 0)).toEqual(expected);
    });
    test('should create the third layout row', () => {
        const list = [7, 0, -2];
        const expected = "** ** -2";
        expect(createLayoutRow(list, 2)).toEqual(expected);
    });
    test('should create the fifth layout row using a 2-digits number', () => {
        const list = [1, 3, 5, 7, 10, 0, -3];
        const expected = "** ** ** ** 10 ** **";
        expect(createLayoutRow(list, 4)).toEqual(expected);
    });
    test('should create the last layout row using a negative number', () => {
        const list = [1, 3, 5, 7, 10, 0, -3];
        const expected = "** ** ** ** ** ** -3";
        expect(createLayoutRow(list, 6)).toEqual(expected);
    });
})
