/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    var merge = [];

    for (var i = 0; i < intervals.length; i++) {
        var current = intervals[i];

        var lastItem = merge[merge.length - 1];

        if (lastItem) {

            var start = lastItem[0];
            var end = lastItem[1];

            if (end < current[0]) {
                merge.push(current);
                continue;
            }

            if (end < current[1]) {
                lastItem[1] = current[1]
            }
        } else {
            merge.push(current)
        }

    }

    return merge;
};
