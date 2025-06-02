/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k = 1;
    var ref = 1;
    var index = 1;
    
    for(var i = 1; i < nums.length ; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[ref] = nums[i]
            ref = ref+1;
            k++;
        }
    }    
    return k;
};


var removeDuplicatesBadPerformance = function(nums) {
    var k = 1;
    var index = 1;

    while (index < nums.length) {
        var num = nums[index];
        if (nums[index - 1] === num) {
            nums.splice(index, 1);
        } else {
            k++;
            index++;
        }
    }
    
    return k;
};