const assert = require("assert");

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let array = [1, 2, 3, "a"];
// implemente seus testes aqui
assert.deepStrictEqual(myRemove(array, 2), [1, 3, "a"]);
assert.deepStrictEqual(myRemove(array, "a"), [1, 2, 3]);

