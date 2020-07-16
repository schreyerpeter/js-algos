const maxSum = require('./index');

test('maxSum is a function', () => {
  expect(typeof maxSum).toEqual('function');
});

test('correctly finds the missing number', () => {
  expect(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});
