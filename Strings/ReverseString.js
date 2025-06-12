/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        var inverse = s[left];
        s[left] = s[right];
        s[right] = inverse;
        left++;
        right--;
    }
};