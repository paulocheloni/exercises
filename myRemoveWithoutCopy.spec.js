const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

test('given an array it should remove the item', () => {
    expect(myRemoveWithoutCopy([1,2,3], 2)).toEqual([1,3]);
})

test('given an it should not return the removed item', () => {
    expect(myRemoveWithoutCopy([1,2,3],2)).not.toContain(2);
})

test('given an array it should change the array', () => {
    const params = [1, 2, 3];
    myRemoveWithoutCopy(params,2);
    expect(params).not.toEqual([1,2,3]);
})

test('given an element that is not an element of the array it should return the array with no changes', () => {
    expect(myRemoveWithoutCopy([1,2,3,4,5],6)).toEqual([1,2,3,4,5]);
})