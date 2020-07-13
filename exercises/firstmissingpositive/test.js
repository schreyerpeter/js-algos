const firstMissingPositive = require('./index');

test('firstMissingPositive is a function', () => {
  expect(typeof firstMissingPositive).toEqual('function');
});

test('correctly finds the missing number', () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3);
});

test('correctly finds the missing number with a negative', () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toEqual(2);
});

test('correctly finds the missing number starting above 1', () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toEqual(1);
});
