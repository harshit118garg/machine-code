import { useState } from "react";
import Board from "./components/Board";
import styles from "./styles/index.module.scss";
import { getBoard, checkWinner } from "./utils/helper";

export default function TicTacToe() {
  const size = 3;
  const [gameBoard, setGameBoard] = useState(getBoard(size));
  const [isXTurn, setIsXTurn] = useState(true);
  const winner = checkWinner(gameBoard, size);
  console.log("winner", winner);

  const statusMessage = winner
    ? `winner is ${winner}`
    : isXTurn
    ? "X turn"
    : "O turn";

  const handleCellClick = (ri: number, ci: number) => {
    if (gameBoard[ri][ci] || winner) return;
    let boardDeepCopy = JSON.parse(JSON.stringify(gameBoard));
    boardDeepCopy[ri][ci] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setGameBoard(boardDeepCopy);
  };

  const resetGame = () => {
    setGameBoard(getBoard(size));
    setIsXTurn(true);
    console.log("game reset");
  };

  return (
    <div className={styles.ticTacToeWrapper}>
      <Board gameBoard={gameBoard} handleCellClick={handleCellClick} />
      <div className={styles.info}>
        <h3>{statusMessage}</h3>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}
