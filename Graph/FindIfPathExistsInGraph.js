/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    if (source === destination) {
        return true
    }

    var map = {}
    var visited = new Set()

    for (edge of edges) {
        map[edge[0]] = map[edge[0]] || []
        map[edge[0]].push(edge[1])


        map[edge[1]] = map[edge[1]] || []
        map[edge[1]].push(edge[0])
    }

    function dfs(edge) {
        if (visited.has(edge) || map[edge] == undefined) {
            return;
        }

        visited.add(edge)
        for (des of map[edge]) {
            if (des === destination) {
                return true;
            }
            if (dfs(des)) {
                return true;
            }
        }
    }

    return dfs(source) || false
};
