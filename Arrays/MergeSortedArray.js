/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var j = 0;
    for (var i = m; i < m + n; i++) {
        nums1[i] = nums2[j]
        j++;
    }
    nums1.sort((a, b) => a - b)
};