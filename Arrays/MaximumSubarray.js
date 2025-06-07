/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var maxValue = nums[0];
    var maxSubArrayFound = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var num = nums[i]
        maxValue = Math.max(num, maxValue + num);
        maxSubArrayFound = Math.max(maxSubArrayFound, maxValue)
    }
    return maxSubArrayFound;
};