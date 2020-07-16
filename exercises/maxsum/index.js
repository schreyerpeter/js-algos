// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSum(nums) {
  let sum = nums[0],
    maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

module.exports = maxSum;
