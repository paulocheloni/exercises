const myRemove = require('./myRemove');

test('given an array it should remove the item', () => {
    expect(myRemove([1,2,3,4], 2)).toEqual([1,3,4])
});

test('given an array it should not return the element removed', () => {
    expect(myRemove([1,2,3,4],3)).not.toContain(3)
});

test('given an array it should not change the original array', () => {
    const parameters = [1, 2, 3, 4];
    myRemove(parameters,3);
    expect(parameters).toEqual([1,2,3,4]);
})
test('given an array it should return the complete array if an non existing element is passed as an element to be removed', () => {
    expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
})
