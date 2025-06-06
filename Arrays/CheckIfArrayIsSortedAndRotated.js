/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    var numDecreasing = 0;
    for (var i = 0; i < nums.length ; i++) {
        var indexPrev = i === 0 ? nums.length - 1 : i - 1;
        var numPrev = nums[indexPrev];
        var num = nums[i]

        if (num < numPrev && numDecreasing++ === 1) {
            return false;
        }
    }
    return true;

};