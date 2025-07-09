/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var middle = left + Math.floor((right - left) / 2);


    while (left < right) {
        middle = left + Math.floor((right - left) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[left] === target) {
            return left;
        }

        if (nums[right] === target) {
            return right;
        }

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    if (nums[right] < target) {
        return right + 1;
    } else if (nums[left] > target) {
        return left;
    } else {
        return middle;
    }
}


var searchInsertBetterSolution = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
