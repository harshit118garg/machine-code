export const getBoard = (size: number) => {
  let arr = new Array(size);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(size).fill(null);
  }

  return arr;
};

export const checkWinner = (board: string[][], size: number) => {
  /* check for all the rows */
  for (let i = 0; i < size; i++) {
    const symbol = board[i][0];
    if (symbol) {
      let winner = true;
      for (let j = 1; j < size; j++) {
        if (board[i][j] !== symbol) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbol;
      }
    }
  }

  /* check for the columns */
  for (let j = 0; j < size; j++) {
    const symbol = board[0][j];
    if (symbol) {
      let winner = true;
      for (let i = 1; i < size; i++) {
        if (board[i][j] !== symbol) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbol;
      }
    }
  }

  /* check for main diagonal */
  let symbol = board[0][0];
  if (symbol) {
    let winner = true;
    for (let i = 1; i < size; i++) {
      if (board[i][i] !== symbol) {
        winner = false;
        break;
      }
    }
    if (winner) {
      return symbol;
    }
  }

  /* chekc for opposite diagonal */
  symbol = board[0][size - 1];
  if (symbol) {
    let winner = true;
    for (let i = 1; i < size; i++) {
      if (board[i][size - 1 - i] !== symbol) {
        winner = false;
        break;
      }
    }
    if (winner) {
      return symbol;
    }
  }

  return null;
};
