const decodeWays = require('./index');

test('decodeWays is a function', () => {
  expect(typeof decodeWays).toEqual('function');
});

test('correctly finds the number of trees', () => {
  expect(decodeWays('12')).toEqual(2);
});

test('correctly finds the number of trees', () => {
  expect(decodeWays('226')).toEqual(3);
});
