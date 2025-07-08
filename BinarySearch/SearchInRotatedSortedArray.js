/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left, middle, right;

    left = nums[0];
    right = nums[nums.length - 1];
    var indexMiddle = Math.round((nums.length) / 2)  - 1;
    middle = nums[indexMiddle];

    var sum = -1
    if ((target >= middle && (target <= right || middle >= right ) ) || (middle >= target && (target < left && left <= middle)) ) {
        sum = 1
    }
    for (var i = indexMiddle; i < nums.length && i >= 0; i = i + sum) {

        if(nums[i] === target ) {
            return i;
        }
    }

    return -1
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchBetterSolution = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

   while(left<=right)
   {
    let mid= Math.floor((left+right)/2)

    if(nums[mid]==target) return mid

    if(nums[left]<=nums[mid])
    {
        if(nums[left]<= target && target < nums[mid])
        {
            right= mid-1
        }
        else
        {
            left= mid+1
        }
    }
    else
    {
        if(nums[mid]<target && target<= nums[right])
        {
            left = mid+1
        }
        else
        {
            right = mid-1   
        }
    }




   }
   return -1
};
