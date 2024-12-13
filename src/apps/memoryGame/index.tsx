import { Fragment, useEffect, useState } from "react";
import "./styles/index.scss";
import Select from "react-select";
import { GameDifficulty } from "./definations/constants";
import { GameDifficultyObject } from "./definations/types";
import { fillGrid, shuffleArray } from "./helper/util";

export default function MemoryGame() {
  const [difficulty, setDifficulty] = useState<GameDifficultyObject | null>(
    null
  );

  const handleDifficultyChange = (option: GameDifficultyObject | null) => {
    if (option) setDifficulty(option);
  };

  useEffect(() => {
    if (difficulty) shuffleArray(difficulty.content);
  }, [difficulty]);

  const gridBox = difficulty && fillGrid(difficulty.content);

  console.log({ gridBox });

  return (
    <div className="memory-game-wrapper">
      <h2>Memory Game</h2>
      <div className="difficulty-selector">
        <Select options={GameDifficulty} onChange={handleDifficultyChange} />
      </div>
      <div className="grid-size">
        {gridBox?.map((_row, ri) => {
          return (
            <Fragment key={ri}>
              <div className="row">
                {_row.map((_col, ci) => {
                  return (
                    <Fragment key={ci}>
                      <div className="box">
                        <div className="front">❓</div>
                        <div className="back">{_col}</div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
