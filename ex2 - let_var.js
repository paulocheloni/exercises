const s = [5, 7, 2];
function editInPlace(array) {
  'use strict';
  // Only change code below this line
  const newArray = array.map((element, index, array) => {      
    return array[index-1] || array[array.length-1]
  })
  return newArray;


  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
console.log(editInPlace(s));