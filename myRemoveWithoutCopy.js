const assert = require("assert");

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
const arr = [1, 2, 3, 5];
assert.deepStrictEqual(myRemoveWithoutCopy(arr, 1), [2, 3, 5]);
assert.deepStrictEqual(myRemoveWithoutCopy(arr, 5), [2, 3]);
assert.notDeepStrictEqual(myRemoveWithoutCopy(arr, 2), [2, 3]);
assert.deepStrictEqual(myRemoveWithoutCopy(arr, 5), arr);
// implemente seus testes aqui
