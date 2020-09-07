const compareJSON = require('./compareJSON');

test('given an object it should have the same properties and values', () => {
    const [object1, obj2, obj3] = compareJSON();
    
    expect(object1).toEqual(obj2);
    expect(obj3).not.toEqual(obj2);
});