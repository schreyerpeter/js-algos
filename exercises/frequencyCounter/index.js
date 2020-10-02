// --- Directions
// Given two arrays, return whether every value in the first array
// has its corresponding value squared in the second array
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function frequencyCounter(first, second) {
  // return false if array lengths are not the same
  if (first.length !== second.length) return false;
  // build hash table of values in second and their frequencies
  const squaredNumbers = {};
  for (const number of second) {
    squaredNumbers[number] = ++squaredNumbers[number] || 1;
  }
  // iterate through first and see if value squared exists in hash,
  // decrement match from second, and delete key if count goes to zero
  for (const number of first) {
    const numberSquared = number ** 2;
    if (!(numberSquared in squaredNumbers)) return false;
    squaredNumbers[numberSquared] = squaredNumbers[numberSquared] - 1;
    if (squaredNumbers[numberSquared] === 0)
      delete squaredNumbers[numberSquared];
  }
  return Object.keys(squaredNumbers).length === 0;
}

module.exports = frequencyCounter;
