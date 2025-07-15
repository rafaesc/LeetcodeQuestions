/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var brackets = []

    for (var i = 0; i < s.length; i++) {
        var char = s[i];

        if (char === "(" || char === "[" || char === "{") {
            brackets.push(char)
        } else {
            var latest = brackets.pop()

            if ((char === ")" && latest !== "(") || (char === "]" && latest !== "[") || (char === "}" && latest !== "{")) {
                return false;
            }
        }

    }

    if (brackets.length) {
        return false
    }

    return true;
};
