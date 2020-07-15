// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

const maxProduct = (nums) => {
  if (nums.length < 1) return nums[0];
  let currentMax = nums[0];
  let currentMin = nums[0];
  let totalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      // swap because negative * negative = positive
      let temp = currentMax;
      currentMax = currentMin;
      currentMin = temp;
    }
    currentMax = Math.max(nums[i], nums[i] * currentMax);
    currentMin = Math.min(nums[i], nums[i] * currentMin);
    totalMax = Math.max(currentMax, totalMax);
  }
  return totalMax;
};

module.exports = maxProduct;
