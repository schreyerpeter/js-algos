const maxNonAdjacentSum = require('./index');

test('maxNonAdjacentSum is a function', () => {
  expect(typeof maxNonAdjacentSum).toEqual('function');
});

test('correctly finds the sum', () => {
  expect(maxNonAdjacentSum([2, 4, 6, 2, 5])).toEqual(13);
});

test('correctly finds the sum', () => {
  expect(maxNonAdjacentSum([5, 1, 1, 5])).toEqual(10);
});
