const { addNums, subtractNums } = require('./index');

test('addNums is a function', () => {
  expect(typeof addNums).toEqual('function');
});

test('subtractNums is a function', () => {
  expect(typeof subtractNums).toEqual('function');
});

test('addNums can add two numbers', () => {
  expect(addNums(2, 6)).toEqual(8);
});

test('subtractNums can add two numbers', () => {
  expect(subtractNums(2, 6)).toEqual(-4);
});
