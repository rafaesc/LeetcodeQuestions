/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    var num2Set = new Set();
    var num1Set = new Set();
    var outputNum1 = 0;
    var outputNum2 = 0;

    nums2.forEach(num2 => {
            num2Set.add(num2)
        })

    nums1.forEach((num1) => {
        num1Set.add(num1)
        if (num2Set.has(num1)) {
            outputNum1++;
        }
    })

    nums2.forEach(num2 => {
        if (num1Set.has(num2)) {
            outputNum2++;
        }
        })
    return [outputNum1,outputNum2 ]
};