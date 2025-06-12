/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    return recursionSmash(stones)
};

var recursionSmash = function(stones) {
    if (stones.length === 1) {
       return stones[0]
    }
    
    stones.sort((a, b) => {
        return a > b ? 1 : -1
    });

    var y  = stones[stones.length -1];
    var x = stones[stones.length - 2];
    var diff = null;
    if (x <= y) {
        diff = y - x;
    }

    
    stones.splice(stones.length - 2, 2);
    if (diff !== 0) {
        stones.push(diff)
    }
    if (stones.length > 1) {
        return recursionSmash(stones)
    }

    if (!stones.length) {
        return 0;
    }
    
    return stones[0]
}