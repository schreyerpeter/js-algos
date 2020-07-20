// Directions write functions to add and subtract two numbers without using plus or minus

function addNums(x, y) {
  while (y !== 0) {
    let carry = x & y;

    x = x ^ y;

    y = carry << 1;
  }

  return x;
}

function subtractNums(x, y) {
  while (y !== 0) {
    let carry = ~x & y;

    x = x ^ y;

    y = carry << 1;
  }

  return x;
}

module.exports = { addNums, subtractNums };
