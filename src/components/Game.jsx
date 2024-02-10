import React from "react";
import { MemoizedCell } from "./Cell";
import { MemoizedFooter } from "./Footer";
import { utils } from "../shared/constants";
import PropTypes from "prop-types";

/**
 * Game Component
 * 
 * @param {cellStatus, selected_cells, onCellClick, onStartClick, gameStatus, challengeSecondsLeft, secondsLeft} props Destructed property
 *      values for various properties of the Game.
 * @returns A JSX object representing the Game Board
 */
function Game({
  cellStatus,
  selected_cells,
  onCellClick,
  onStartClick,
  gameStatus,
  challengeSecondsLeft,
  secondsLeft,
}) {
  return (
    <>
      <div className='grid'>
        {utils.range(1, 25).map((number) => (
          <MemoizedCell
            key={number}
            cellValue={number}
            cellStatus={cellStatus}
            isBlue={selected_cells.includes(number) ? true : false}
            onClick={onCellClick}
          />
        ))}
      </div>
      <MemoizedFooter
        onClick={onStartClick}
        gameStatus={gameStatus}
        challengeSecondsLeft={challengeSecondsLeft}
        secondsLeft={secondsLeft}
      />
    </>
  );
}

Game.propTypes = {
  selected_cells: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired,
  onStartClick: PropTypes.func.isRequired,
  cellStatus: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  challengeSecondsLeft: PropTypes.number.isRequired,
  secondsLeft: PropTypes.number.isRequired,
};

export const MemoizedGame = React.memo(Game);
