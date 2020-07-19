const autocomplete = require('./index');

test('autocomplete is a function', () => {
  expect(typeof autocomplete).toEqual('function');
});

test('correctly finds the number of trees', () => {
  expect(autocomplete('de', ['dog', 'deer', 'deal'])).toEqual(['deer', 'deal']);
});
