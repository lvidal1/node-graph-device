// Node Graph Device

// The device will follow 3 main steps:
// 1. Sort input list
// 2. Build new list
// 3. Print new list


const Matrix = () => {
    /**
 * Filter out all negative numbers from the list and sort the remaining numbers in ascending order.
 * @returns array
 */
    const filterPositiveAndSortList = list => {
        return list.filter(num => num > 0).sort((a, b) => a - b);
    }

    /**
     * Filter the list to only include negative numbers, then sort the list in ascending order.
     * @returns array
     */
    const filterNegativeAndSortList = list => {
        return list.filter(num => num < 0).sort((a, b) => a - b);
    }

    /**
     * FilterZeros takes a list and returns a list of all the zeros in the list.
     * @returns array
     */
    const filterZeros = list => {
        return list.filter(num => num == 0);
    }

    /**
     * Given a list of positive numbers, a list of negative numbers, and a list of zeros, return a list of
     * the positive numbers, followed by the zeros, followed by the negative numbers.
     * @param positivePartial array
     * @param negativePartial array
     * @param zerosPartial array
     * @returns array
     */
    const buildList = (positivePartial, negativePartial, zerosPartial) => {
        return [...positivePartial, ...zerosPartial, ...negativePartial];
    }

    /**
     * It takes a list of numbers, apply sort & filter mechanism to create an new ordered list 
     * ready for rendering
     * @param list array
     * @returns array.
     */
    const generateRenderList = (list) => {
        return buildList(
            filterPositiveAndSortList(list),
            filterNegativeAndSortList(list),
            filterZeros(list),
        );
    }

    /**
     * Creates a string based on specific layout that contains a item list on a specific position.
     * It creates a new array of the same length as the input array, fills it with placeholders, fills the
     * requested position with the requested number, and joins all items with a space.
     * @param list - array
     * @param position - The position of the number in the list
     * @returns string
     */
    const createLayoutRow = (list, position) => {
        // Format number
        const number = list[position];
        const formatNumber = (number < 0 || number > 9) ? number : " " + number;
        // Calculate column length
        const columnLength = list.length;
        // Define a new based on column lenght 
        const row = new Array(columnLength);
        // Resolve layout row
        return row
            // Fill all items with placeholder
            .fill("**")
            // Fill requested position with format number
            .fill(formatNumber, position, position + 1)
            // Join all items with a space
            .join(" ");
    }

    /**
     * Create a matrix of the same size as the input list, where each row is a list of the same size as
     * the input list
     * @param list - array
     * @returns array.
     */
    const createLayoutMatrix = (list) => {
        return list.map((number, position) => createLayoutRow(list, position));
    }

    /**
     * It takes a list of items and returns a matrix of the items, where the matrix is a list of rows,
     * where each row is a list of items.
     * @param list - array
     * @returns A string of the layout matrix.
     */
    const renderLayoutMatrix = (list) => {
        return createLayoutMatrix(list).join("\n");
    }

    return {
        buildList,
        createLayoutMatrix,
        createLayoutRow,
        filterNegativeAndSortList,
        filterPositiveAndSortList,
        filterZeros,
        generateRenderList,
        renderLayoutMatrix
    }
}

module.exports = Matrix;