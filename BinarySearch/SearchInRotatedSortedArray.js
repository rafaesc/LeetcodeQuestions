/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left, middle, right;

    left = nums[0];
    right = nums[nums.length - 1];
    var indexMiddle = Math.round((nums.length) / 2)  - 1;
    middle = nums[indexMiddle];

    var sum = -1
    if ((target >= middle && (target <= right || middle >= right ) ) || (middle >= target && (target < left && left <= middle)) ) {
        sum = 1
    }
    for (var i = indexMiddle; i < nums.length && i >= 0; i = i + sum) {

        if(nums[i] === target ) {
            return i;
        }
    }

    return -1
};
