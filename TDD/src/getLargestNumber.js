const getLargestNumber = (array) => {
    let largestNumber;
    for (let i = 0; i <= array.length - 2; i += 1) {
        if (array[i] > array[i + 1]) {
            largestNumber = [array[i]];
        }
        else {
            largestNumber = [array[i + 1]]
        }
    }
    return Number(largestNumber)
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const assert = require('assert');
assert.deepEqual(getLargestNumber([50,25,100]),100)
assert.deepEqual(getLargestNumber([50,25]), 50)
assert.deepStrictEqual(getLargestNumber(parameter), result)
