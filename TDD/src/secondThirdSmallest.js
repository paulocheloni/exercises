function secondThirdSmallest(array) {
  const [, b, c] = [...array];
  return [b, c];
}

const bubleSort = (array) => {
  let copy = 0;
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        copy = array[j];
        array[j] = array[j + 1];
        array[j + 1] = copy;
      }
    }
  }
  return array;
};
// reference https://www.geeksforgeeks.org/bubble-sort/

module.exports = {
  bubleSort: { bubleSort },
  secondThirdSmallest: { secondThirdSmallest },
};
