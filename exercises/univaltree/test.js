const countUnivals = require('./index');

test('countUnivals is a function', () => {
  expect(typeof countUnivals).toEqual('function');
});

test('correctly finds the number of trees', () => {
  const tree = {
    value: 0,
    left: { value: 1, left: null, right: null },
    right: {
      value: 0,
      left: {
        value: 1,
        left: { value: 1, right: null, left: null },
        right: { value: 1, right: null, left: null },
      },
      right: {
        value: 0,
        left: null,
        right: null,
      },
    },
  };
  expect(countUnivals(tree)).toEqual(5);
});
