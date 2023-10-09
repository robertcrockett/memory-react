import { utils } from "./GameApp";

function Game() {
  return (
    <div className='grid'>
      {utils.range(1, 25).map((number) => (
        <div key={number} className='cell' style={{ width: "20%" }}></div>
      ))}
    </div>
  );
}

export default Game;
