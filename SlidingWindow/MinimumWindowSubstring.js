/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    var min = -1;
    var minLeft = 0;
    var minRight = 0
    var strArray = []
    var window = {};
    var tKeys = {}
    var totalTkeys = 0;

    for (var i = 0; i < t.length; i++) {
        if (tKeys[t[i]]) {
            tKeys[t[i]] = tKeys[t[i]] + 1
        } else {
            tKeys[t[i]] = 1;
            totalTkeys++;
        }
    }
    
    var totalWindows = 0;
    var left = 0;
    for (var i = 0; i < s.length; i++) {
        var char = s[i];

        if (tKeys[char]) {
            window[char] = window[char] ? window[char] + 1 : 1;

            if (window[char] === tKeys[char]) {
                totalWindows++;
            }
        } else {
            continue;
        }

        while(totalWindows === totalTkeys) {
            var length = i - left;
            var removeChar = s[left];

            if (min === -1 || length < min) {
                minLeft = left
                minRight = i
                min = length
            }
            left++;

            if (tKeys[removeChar]) {
                window[removeChar] = window[removeChar] - 1;
                if (window[removeChar] < tKeys[removeChar]) {
                    totalWindows--;
                }
            }
        }
    }
    
    return min === -1 ? "" : s.substring(minLeft, minRight + 1);
};
