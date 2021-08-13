/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // initialize board with '.';
  // place Q;
  // 1 Q per col and row;
  // check if safe to place n+1 Q;
  // if not iterate over column;

  // let board = new Array(n).fill(0).map(e => new Array(n).fill('.'));
  // console.log(board);

  let res = [];

  let row = 0;


  while (row < n) {

    //initialize board
    let board = new Array(n).fill(0).map(e => new Array(n).fill('.'));

    //initialize first pos;
    let pos = [];
    board[row][0] = 'Q';
    pos.push([row, 0]);

    placeQueens(res, 1, n, board, pos);

    //backtrack
    board[row][0] = '.';
    pos.pop();
    row++;
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[0].length; j++) {
      res[i][j] = res[i][j].join('')
    }

  }
  return res;
};

const placeQueens = (res, col, n, board, pos) => {
  if (col >= n) {
    let copy = [];
    for (let i = 0; i < board.length; i++) {
      copy[i] = board[i].slice();
    }
    res.push(copy);
  }

  let row = 0;
  while (row < n) {

    let flag = false;
    for (let i = 0; i < pos.length; i++) {
      if (pos[i][0] === row) flag = true;
    }

    if (!flag) {
      let safe = isSafe(pos, [row, col]);

      if (safe) {
        board[row][col] = 'Q';
        pos.push([row, col]);

        placeQueens(res, col + 1, n, board, pos);

        pos.pop();
        board[row][col] = '.';
      }
    }

    row++;
  }
}

const isSafe = (positions, cur) => {
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];
    if (Math.abs(pos[0] - cur[0]) === Math.abs(pos[1] - cur[1])) {
      return false;
    }
  }
  return true;
}