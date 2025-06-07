/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var subarray = [];
    var middleArray = [];
    var rightSidePoint = nums.length > k ? nums.length - k :   nums.length - (k % nums.length);
    var leftSidePoint = 0;
    var middleSidePoint = 0;
    for (var i = 0; i < nums.length ; i++) {
        var num = nums[i];
        if (rightSidePoint < nums.length) {
            subarray.push(num);
            nums[i] = nums[rightSidePoint]
            rightSidePoint++
        } else if (leftSidePoint < subarray.length) {
            middleArray.push(num)
            nums[i] = subarray[leftSidePoint]
            leftSidePoint++;
        } else if (middleSidePoint < middleArray.length) {
            middleArray.push(nums[i])
            nums[i] = middleArray[middleSidePoint]
            middleSidePoint++;
        }

    }
};