/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var total = 0;
    for (var i = 0; i < k; i++) {
        total += nums[i];
    }

    var maxAverage = total / k;
    for (var i = 1; i <= nums.length - k; i++) {
        total -= nums[i - 1];
        total += nums[i + k - 1];

        maxAverage = Math.max(maxAverage, total / k);
    }

    return maxAverage;

};
