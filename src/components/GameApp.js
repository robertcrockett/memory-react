import Footer from "./Footer";
import "./GameApp.css";

function GameApp() {
  return (
    <>
      <div className='game'>
        <div className='grid'>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>

          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>

          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>

          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>

          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
          <div className='cell' style={{ width: "20%" }}></div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default GameApp;
