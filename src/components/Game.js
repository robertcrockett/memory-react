import Cell from "./Cell";
import { utils } from "./GameApp";

function Game() {
  return (
    <div className='grid'>
      {utils.range(1, 25).map((number) => (
        <Cell key={number} />
      ))}
    </div>
  );
}

export default Game;
