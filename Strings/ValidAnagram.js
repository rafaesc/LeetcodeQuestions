/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var dictionary = {}
    for (var i= 0;i < s.length; i++) {
        var char = dictionary[s[i]]
        if (char) {
            dictionary[s[i]] = char + 1
        } else {
            dictionary[s[i]] = 1;
        }
    }

    
    for (var i= 0;i < t.length; i++) {
        var char = t[i];
        var dictionaryValue = dictionary[char];

        if (!dictionaryValue) {
            return false;
        }

        dictionary[char] = dictionaryValue - 1

        if ((dictionaryValue - 1) === 0) {
            delete dictionary[char];
        }
    }

    if (Object.keys(dictionary).length) {
        console.log(dictionary)
        return false;
    }

    return true;

};


//better solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s, t) {
    if(s.length !== t.length) return false
    let map1 = new Map()
    let map2 = new Map()
    for(let i = 0 ; i< s.length ; i++){
        let count1 = ((map1.get(s[i]) || 0) +1)
        let count2 = ((map2.get(t[i]) || 0) +1)
        map1.set(s[i],count1)
        map2.set(t[i],count2)
    }
    for(let item of s){
   
        if(map1.get(item) !== map2.get(item)){
            return false
        }
    }
    return true
};