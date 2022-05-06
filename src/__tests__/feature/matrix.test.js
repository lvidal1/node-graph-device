const Matrix = require("../../matrix");

const { createLayoutMatrix, renderLayoutMatrix } = Matrix();

describe('print phase', () => {
    test('should create the layout matrix', () => {
        const list = [7, 0, -2];
        const expected = [" 7 ** **", "**  0 **", "** ** -2"];
        expect(createLayoutMatrix(list)).toEqual(expected);
    });
    test('should create the layout string to be rendered in console', () => {
        const list = [7, 0, -2];
        const expected = " 7 ** **\n**  0 **\n** ** -2";
        expect(renderLayoutMatrix(list)).toEqual(expected);
    });
})
