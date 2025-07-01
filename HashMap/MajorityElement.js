/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = {}
    var max = nums[0]
    let majority = 0;
    for (num of nums) {
        if (map[num]) {
            map[num] = map[num]  + 1
        } else {
            map[num] = 1
        }
        if (map[num] > majority) {
            max = num;
            majority = map[num];
        }
    };

    return max
};