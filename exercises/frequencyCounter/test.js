const frequencyCounter = require('./index');

test('frequencyCounter is a function', () => {
  expect(typeof frequencyCounter).toEqual('function');
});

test('frequencyCounter returns true', () => {
  expect(frequencyCounter([1, 2, 3], [4, 1, 9])).toEqual(true);
});

test('frequencyCounter returns false when array lengths are different', () => {
  expect(frequencyCounter([1, 2, 3], [1, 9])).toEqual(false);
});

test('frequencyCounter returns false when frequencies are different', () => {
  expect(frequencyCounter([1, 2, 1], [4, 4, 1])).toEqual(false);
});
