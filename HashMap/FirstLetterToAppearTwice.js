/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    var set = new Set();

    for (var i = 0; i < s.length ; i++) {
        var char = s[i];
        if (set.has(char)) {
            return char;
        } else {
            set.add(char);
        }
    }

    

};