// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Note:

// Your algorithm should run in O(n) time and uses constant extra space.

function firstMissingPositive(nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = 1;
  }

  let n = 1;

  while (hash[n]) {
    n++;
  }

  return n;
}

module.exports = firstMissingPositive;
