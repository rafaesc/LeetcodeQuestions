/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums = nums.sort((a, b) => a - b)
    
    var left = 0;
    var right = 0;
    var maxFrequency = 0;
    var total = 0;

    while (right < nums.length) {
        total += nums[right];

        while (nums[right] * (right - left + 1) > total + k) {
            total -= nums[left];
            left++;
        }
        maxFrequency  = Math.max(maxFrequency, right - left + 1); 

        right++;
    }

    return maxFrequency;

};