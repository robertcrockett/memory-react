import Cell from "./Cell";
import Footer from "./Footer";
import { utils } from "../shared/constants";
import PropTypes from "prop-types";

function Game(props) {
  return (
    <>
      <div className='grid'>
        {utils.range(1, 25).map((number) => (
          <Cell
            key={number}
            cellValue={number}
            cellStatus={props.cellStatus}
            isBlue={props.selected_cells.includes(number) ? true : false}
            onClick={props.onCellClick}
          />
        ))}
      </div>
      <Footer
        onClick={props.onStartClick}
        gameStatus={props.gameStatus}
        challengeSecondsLeft={props.challengeSecondsLeft}
        secondsLeft={props.secondsLeft}
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

export default Game;