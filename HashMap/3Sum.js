/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    var left = 0;
    var output = [];
    while (left < nums.length - 2) {
        if (left > 0 && nums[left] === nums[left-1]) {
            left++;
            continue;
        }
        var numberLeft = nums[left];
        var middle = left + 1
        var right = nums.length - 1;
        while (middle < right) {
            var numberMiddle = nums[middle];
            var numberRight = nums[right];
            var total = numberLeft + numberMiddle + numberRight;
            if (total === 0) {
                output.push([numberLeft, numberMiddle, numberRight])
                middle++;
                while (nums[middle] === nums[middle-1] && middle < right) {
                    middle++;
                }
                continue;
            }
            if (total > 0) {
                right--;
                continue
            }
            middle++;
        }
        left++;
    }
    return output;
};