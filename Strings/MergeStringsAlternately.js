/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var maxLength = word1.length > word2.length ? word1.length : word2.length;
    var output = [];

    for (var i = 0 ; i < maxLength; i++) {
        if (word1[i]) {
            output.push(word1[i])
        }
        if(word2[i]) {
            output.push(word2[i])
        }
        
    }

    return output.join("");

};