/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(slow) {
    var fast = getValue(slow)

    while(fast){
        fast = getValue(fast);
        slow = getValue(slow)
        if (fast) {
            fast = getValue(fast)

            if (slow ===fast) {
                return false;
            }
        } else {
            return true;
        }
    }
    return true;
};


var getValue = (n) => {
    var total = 0
    n = String(n)
    for (var i = 0; i < n.length; i++) {
        total += Math.pow(n[i], 2) 
    }
    if (total === 1) {
        return null;
    }
    return total;
}


var isHappyBestSolution = function (n) {
    var dummy = new Set()
    while (!dummy.has(n)) {
        dummy.add(n)
        var sum = 0
        while (n > 0) {
            var digit = n % 10
            sum += digit * digit
            n = Math.floor(n / 10)
        }
        n = sum
        if (sum == 1) return true
    }
    return false
};