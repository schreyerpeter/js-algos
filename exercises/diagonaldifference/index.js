// --- Directions
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

function diagonalDifference(arr) {
  let startColumn = 0,
    endColumn = arr[0].length - 1,
    backslashSum = 0,
    forwardslashSum = 0;
  for (let i = 0; i < arr.length; i++) {
    backslashSum += arr[i][startColumn];
    forwardslashSum += arr[i][endColumn];
    startColumn++;
    endColumn--;
  }
  return Math.abs(backslashSum - forwardslashSum);
}

module.exports = diagonalDifference;
