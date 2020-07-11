const diagonalDifference = require('./index');

test('DiagonalDifference is a function', () => {
  expect(typeof diagonalDifference).toEqual('function');
});

test('correctly finds the absolute difference in a 3x3 array', () => {
  const arg = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];
  expect(diagonalDifference(arg)).toEqual(15);
});

test('correctly finds the absolute difference in a 5x5 array', () => {
  const arg = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];
  expect(diagonalDifference(arg)).toEqual(0);
});
