import { useState } from "react";
import Footer from "./Footer";
import Game from "./Game";
import "./GameApp.css";

function GameApp() {
  const [incorrectGuessesRemaining, setIncorrectGuessesRemaining] = useState(3);
  const [matchedCellsLeft, setMatchedCellsLeft] = useState(6);

  // Test Shuffle array
  const six_random_cells = utils.shuffle(utils.range(1, 25)).slice(0, 6);
  console.log(six_random_cells);

  return (
    <>
      <div className='game'>
        <Game />
        <Footer />
      </div>
    </>
  );
}

export default GameApp;

export const utils = {
  // Create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // Fisher-Yates Shuffle
  shuffle: (array) => {
    let i = array.length,
      temp;

    while (i--) {
      // Obtain a randomly chosen element
      temp = Math.floor(Math.random() * (i + 1));

      // Swap randomly chosen element using deconstrution
      [array[temp], array[i]] = [array[i], array[temp]];
    }

    // Return the shuffled elements of the array
    return array;
  },
};
