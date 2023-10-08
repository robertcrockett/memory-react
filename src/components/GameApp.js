import Footer from "./Footer";
import "./GameApp.css";

function GameApp() {
  return (
    <>
      <div className='game'>
        <div className='grid'>
          {utils.range(1, 25).map((number) => (
            <div key={number} className='cell' style={{ width: "20%" }}></div>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default GameApp;

export const utils = {
  // Create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
};
