/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var output = []
    for (var i = 1; i < n + 1; i++) {
        var s = "";
        if(i % 3 === 0) {
            s += "Fizz"
        }
        if(i % 5 === 0) {
            s += "Buzz"
        }
        if(s === "") {
            s += i
        }
        output.push(s);
    }
    return output;
};