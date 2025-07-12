var solve = function(board) {
    const n = board.length;
    const m = board[0].length;
    const vis = Array.from({ length: n }, () => Array(m).fill(false)); // Visited matrix to track processed cells

    const dfs = (row, col) => {
        // Mark the current cell as visited
        vis[row][col] = true;

        // Directions for traversing: down, up, left, right
        const delRow = [1, -1, 0, 0];
        const delCol = [0, 0, -1, 1];

        for (let i = 0; i < 4; i++) {
            const nrow = row + delRow[i];
            const ncol = col + delCol[i];
            // Check bounds, visitation, and if it's an 'O'
            if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && !vis[nrow][ncol] && board[nrow][ncol] === 'O') {
                dfs(nrow, ncol);
            }
        }
    };

    // Traverse border rows (first and last columns)
    for (let i = 0; i < n; i++) {
        if (!vis[i][0] && board[i][0] === 'O') dfs(i, 0);
        if (!vis[i][m - 1] && board[i][m - 1] === 'O') dfs(i, m - 1);
    }

    // Traverse border columns (first and last rows)
    for (let j = 0; j < m; j++) {
        if (!vis[0][j] && board[0][j] === 'O') dfs(0, j);
        if (!vis[n - 1][j] && board[n - 1][j] === 'O') dfs(n - 1, j);
    }

    // Flip unvisited 'O' to 'X', retain visited 'O' as is
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!vis[i][j] && board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
};
