// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(
//       `${" ".repeat(n - i)}${"#".repeat(2 * i - 1)}${" ".repeat(n - i)}`,
//     );
//   }
// }

function pyramid(n, row = 1) {
  if (row > n) return;
  console.log(
    `${" ".repeat(n - row)}${"#".repeat(2 * row - 1)}${" ".repeat(n - row)}`,
  );
  pyramid(n, row + 1);
}

module.exports = pyramid;