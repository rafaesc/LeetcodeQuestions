/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var rows = grid.length;
    var cols = grid[0].length;

    var visits = new Set();
    var islands = 0;

    function bfs(r, c) {
        var directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
        var pointsToCheck = [];
        pointsToCheck.push([r, c]);
        visits.add(`${r},${c}`);

        while (pointsToCheck.length) {
            var first = pointsToCheck.shift();

            var newPointsToCheck = directions.map((dir) => {
                return [first[0] + dir[0], first[1] + dir[1]];
            })
                .filter(point => point[0] >= 0 &&
                 point[0] < rows && point[1] >= 0 && point[1] < cols 
                 && !visits.has(`${point[0]},${point[1]}`) &&
                  grid[point[0]][point[1]] === "1")
                .forEach(point => {
                    pointsToCheck.push(point)
                    visits.add(`${point[0]},${point[1]}`);
                })
        }

    }

    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            var current = r + "" + c;
            if (grid[r][c] === "1" && !visits.has(`${r},${c}`)) {
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
};
