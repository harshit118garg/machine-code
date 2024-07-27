import { Fragment } from "react";
import styles from "../styles/index.module.scss";

interface BoardProps {
  gameBoard: string[][];
  handleCellClick: (ri: number, ci: number) => void;
}

export default function Board({ gameBoard, handleCellClick }: BoardProps) {
  return (
    <div className={styles.board}>
      {gameBoard?.map((_row, ri) => {
        return (
          <Fragment key={ri}>
            <div className={styles.row}>
              {_row.map((_cell, ci: number) => {
                return (
                  <Fragment key={ci}>
                    <div
                      className={styles.cell}
                      onClick={() => handleCellClick(ri, ci)}
                    >
                      {_cell}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
