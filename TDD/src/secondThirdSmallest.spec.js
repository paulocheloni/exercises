const assert = require("assert");
const functions = require("./secondThirdSmallest");
const bubleSort = functions.bubleSort.bubleSort;
const secondThirdSmallest = functions.secondThirdSmallest.secondThirdSmallest;

const parameter = [8, 5, 4, 6];
const sortedParameter = [4, 5, 6, 8];
const result = [5, 6];

assert.deepStrictEqual(bubleSort(parameter), sortedParameter);
assert.deepStrictEqual(secondThirdSmallest(bubleSort(parameter)), result)


