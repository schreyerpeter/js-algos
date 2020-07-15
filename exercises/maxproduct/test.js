const maxProduct = require('./index');

test('maxProduct is a function', () => {
  expect(typeof maxProduct).toEqual('function');
});

test('correctly finds the max product', () => {
  expect(maxProduct([2, 3, -2, 4])).toEqual(6);
});

test('correctly finds the max product with negatives', () => {
  expect(maxProduct([-2, 0, -1])).toEqual(0);
});
