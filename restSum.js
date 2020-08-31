const assert = require('assert')

const sum = (...arrayOfNumbers) => {
    let sum = 0;
    arrayOfNumbers.forEach(number => sum += number);
    return sum;
}


assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)