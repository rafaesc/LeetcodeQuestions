/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    var ref = image[sr][sc];
    recursion(image, ref, sr, sc, color)
    return image;
};


var recursion =  function(image, ref, sr, sc, color) {
    if (image[sr] === undefined || image[sr][sc] === undefined || image[sr][sc] !== ref || image[sr][sc] === color) {
        return;
    }
    image[sr][sc] = color;
    recursion(image, ref, sr - 1, sc, color)
    recursion(image, ref, sr + 1, sc, color)
    recursion(image, ref, sr, sc + 1, color)
    recursion(image, ref, sr, sc - 1, color)
    
};
