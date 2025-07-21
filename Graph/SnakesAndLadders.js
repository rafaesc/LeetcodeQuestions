/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;

    // we convert 1D index into correct [row, col] accounting for zigzag
    function getRC(idx) {
        const r = n - 1 - Math.floor((idx - 1) / n);
        let c = (idx - 1) % n;
        if ((n - 1 - r) % 2 === 1) c = n - 1 - c;
        return [r, c];
    }

    const visited = new Array(n * n + 1).fill(false);
    const queue = [[1, 0]]; // [square index, move count]
    visited[1] = true;

    while (queue.length > 0) {
        const [curr, moves] = queue.shift();

        for (let i = 1; i <= 6; i++) {
            let next = curr + i;
            if (next > n * n) continue;

            const [r, c] = getRC(next);
            if (board[r][c] !== -1) {
                next = board[r][c]; // we jump via snake or ladder
            }

            if (next === n * n) return moves + 1;
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, moves + 1]);
            }
        }
    }

    return -1; // unreachable
};
