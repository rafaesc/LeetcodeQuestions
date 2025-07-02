/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    
    while(left<right) {
        var total = numbers[left] + numbers[right];
        if (total === target) {
            return [left + 1 , right + 1]
        }

        if (total > target) {
            right--;
            continue;
        }

        left++;
    }
};