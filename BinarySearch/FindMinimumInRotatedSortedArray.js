/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    var left = 0;
    var right = nums.length - 1


    while (left <= right) {

        var middle = left + (Math.floor((right - left) / 2))
        if (middle === right || nums[middle - 1] > nums[middle]) {
            return nums[middle]
        }

        if (nums[left] < nums[right]) {
            return nums[left];
        }


        if (nums[middle] < nums[right]) {
            right = middle - 1;
        } else {

            left = middle + 1;
        }

    }
};
