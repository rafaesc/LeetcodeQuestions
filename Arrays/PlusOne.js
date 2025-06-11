/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    plusOneRecursion(digits, digits.length - 1)

    return digits;
};

// verify if the digit could be increment plus 1 or should be 0 and send for the significant value
var plusOneRecursion = function(digits, i) {
    if (digits[i] === undefined) {
        digits.unshift(1)
        return
    }
    if (digits[i] < 9) {
        digits[i] = digits[i] + 1
        return;
    }
    digits[i] = 0;
    plusOneRecursion(digits, i - 1)

}