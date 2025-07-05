/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }

    if (intervals[intervals.length - 1][1] < newInterval[0]) {
        intervals.push(newInterval)

        return intervals
    }

    var merge = [];
    var start = newInterval[0]
    var end = newInterval[1]
    var added = false;

    for (var i = 0; i < intervals.length; i++) {
        var current = intervals[i];


        if (current[1] < start) {
            merge.push(current)
            continue;
        }

        if (end < current[0]) {
            if (!added) {
                merge.push(newInterval)
                added = true
            }
            merge.push(current)
            continue;
        }

        //overlapping
        //add
        if (added) {
            var lastItem = merge[merge.length - 1];

            if (lastItem[1] < current[1]) {
                lastItem[1] = current[1];
            }

            continue;
        } else {
            if (current[0] > start) {
                current[0] = start;
            }

            if (current[1] < end) {
                current[1] = end;
            }

            merge.push(current);
            added = true;
        }
    }

    return merge;
};
