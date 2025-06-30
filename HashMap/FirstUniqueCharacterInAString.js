/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var dictionary = {};


    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        var dictionaryCount = dictionary[char];
        if (dictionaryCount) {
            dictionary[char].count = dictionaryCount.count + 1;
        } else {
            dictionary[char] = {i: i, count: 1};
        }
    }


    var arr = Object.keys(dictionary);

    for (var i = 0; i < arr.length ; i++) {
        var count = arr[i];
        if (dictionary[count].count === 1) {
            return dictionary[count].i;
        }
    }

    return -1;
};