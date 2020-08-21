const assert = require("assert");
const functions = require("./secondThirdSmallest");
const bubleSort = functions.bubleSort.bubleSort;
const secondThirdSmallest = functions.secondThirdSmallest.secondThirdSmallest;

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const sortedParameter = [4, 5, 6, 8, 9, 10, 21, 32, 90];
const result = [5, 6];

assert.deepStrictEqual(bubleSort(parameter), sortedParameter);

assert.deepStrictEqual(secondThirdSmallest(bubleSort(parameter)), result);
