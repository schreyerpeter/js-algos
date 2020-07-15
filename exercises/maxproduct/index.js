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
