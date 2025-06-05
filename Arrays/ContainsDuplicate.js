/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hashMapNums = new Set()

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (hashMapNums.has(num)) {
            return true;
        }
        hashMapNums.add(num)
    }
    return false;
};