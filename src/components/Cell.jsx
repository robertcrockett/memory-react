import React, { useCallback } from "react";
import PropTypes from "prop-types";

/**
 * Cell Component
 * 
 * @param {cellStatus, cellValue, onClick} props Destructed property
 *      values for various properties of the Cell.
 * @returns A JSX button object representing a Cell.
 */
function Cell({ cellStatus, cellValue, onClick }) {
  const handleClick = useCallback(() => {
    onClick(cellValue, cellStatus(cellValue));
  }, [cellValue, cellStatus, onClick]);

  return (
    <button
      className='cell'
      data-testid='cell'
      style={{
        width: "20%",
        backgroundColor: colors[cellStatus(cellValue)],
      }}
      onClick={handleClick}
      title={`Cell ${cellValue} is ${cellStatus(cellValue)}`}
    ></button>
  );
}

Cell.propTypes = {
  cellStatus: PropTypes.func.isRequired,
  cellValue: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Export the Cell component
export const MemoizedCell = React.memo(Cell);

// Colors array representing the various states of the Cell
const colors = {
  unselected: "white",
  blue: "lightblue",
  correct: "lightgreen",
  incorrect: "lightcoral",
};
