/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    var result = [];

    for (var i = 0; i < nums1.length; i++) {
        var val = nums1[i];

        var index = nums2.indexOf(val);

        if (index == -1) {
            result.push(-1)
            continue;
        }

        var output = -1;

        for (var j = index + 1; j < nums2.length; j++) {
            var nextGreater = nums2[j];

            if (val < nextGreater) {
                output = nextGreater;
                break;
            }
        }


        result.push(output);

    }

    return result

};
