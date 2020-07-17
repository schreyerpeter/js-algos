// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

function maxNonAdjacentSum(nums) {
  let incl = nums[0],
    excl = 0,
    exclNew;

  for (let i = 1; i < nums.length; i++) {
    exclNew = Math.max(incl, excl);

    incl = excl + nums[i];
    excl = exclNew;
  }

  return Math.max(incl, excl);
}

module.exports = maxNonAdjacentSum;
