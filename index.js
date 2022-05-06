// Node Graph Device

// The device will follow 3 main steps:
// 1. Sort input list
// 2. Create new list
// 3. Print new list


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

const createLayoutRow = (list, position) => {
    return "";
}


module.exports = {
    filterPositiveAndSortList,
    filterNegativeAndSortList,
    filterZeros,
    buildList,
    generateRenderList,
    createLayoutRow
};