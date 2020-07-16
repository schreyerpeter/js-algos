// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

function countUnivals(root) {
  const [totalCount, isUnival] = helper(root);
  return totalCount;
}

function helper(root) {
  if (root === null) {
    return [0, true];
  }

  const [leftCount, isLeftUnival] = helper(root.left);
  const [rightCount, isRightUnival] = helper(root.right);

  let isUnival = true;

  if (!isLeftUnival || !isRightUnival) {
    isUnival = false;
  }

  if (root.left && root.left.value !== root.value) {
    isUnival = false;
  }

  if (root.right && root.right.value !== root.value) {
    isUnival = false;
  }

  if (isUnival) {
    return [leftCount + rightCount + 1, true];
  } else {
    return [leftCount + rightCount, false];
  }
}

module.exports = countUnivals;
