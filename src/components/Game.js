import Cell from "./Cell";
import { utils } from "./GameApp";

function Game(props) {
  return (
    <div className='grid'>
      {utils.range(1, 25).map((number) => (
        <Cell
          key={number}
          isBlue={props.selected_cells.includes(number) ? true : false}
        />
      ))}
    </div>
  );
}

export default Game;
