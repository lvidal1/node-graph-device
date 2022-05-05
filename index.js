// Node Graph Device

// The device will follow 3 main steps:
// 1. Sort input list
// 2. Create new list
// 3. Print new list

const filterPositiveAndSortList = list => {
    return list.filter(num => num > 0).sort((a, b) => a - b);
}

const filterNegativeAndSortList = list => {
    return list.filter(num => num < 0).sort((a, b) => a - b);
}

const filterZeros = list => {
    return list.filter(num => num == 0);
}


module.exports = {
    filterPositiveAndSortList,
    filterNegativeAndSortList,
    filterZeros
};