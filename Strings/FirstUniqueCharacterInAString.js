/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var obj = {};
    var duplicated = {}
    var index = -1;

    for (var i = 0; i < s.length ; i++) {
        var char = s[i];

        if (obj[char] === undefined) {
            obj[char] = i
        } else {
            obj[char] = null
        }
    }

    var objKeys = Object.keys(obj)

    for (var i = 0; i < objKeys.length; i++) {
        if (obj[objKeys[i]] !== null) {
            return obj[objKeys[i]]
        }
    }

    return -1
    
};