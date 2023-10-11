import { useState } from "react";
import Footer from "./Footer";
import Game from "./Game";
import "./GameApp.css";

function GameApp(props) {
  const [started, setStarted] = useState(false);
  const [incorrectGuessesRemaining, setIncorrectGuessesRemaining] = useState(3);
  const [matchedCells, setMatchedCells] = useState(0);
  const [selectedCells, setSelectedCells] = useState([]);
  const [challengeSecondsLeft, setChallengeSecondsLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [blueCells, setBlueCells] = useState(
    utils.shuffle(utils.range(1, 25)).slice(0, 6)
  );

  const resetGame = () => {
    setIncorrectGuessesRemaining(3);
    setMatchedCells(0);
    setSelectedCells([]);
    setChallengeSecondsLeft(5);
    setSecondsLeft(10);
    setBlueCells(utils.shuffle(utils.range(1, 25)).slice(0, 6));
  };

  const gameStatus =
    // Nested ternary operators. This is less readable then if/else statement (IMO)
    started === false
      ? "inactive"
      : matchedCells === blueCells.length
      ? "won"
      : challengeSecondsLeft > 0
      ? "challenge"
      : secondsLeft === 0
      ? "lost"
      : "active";

  const cellStatus = (number) => {
    // TODO: Game State will drive logic here. For example, if the game is in a state where blue cells should
    // display, then only blue and unselected will display. While the game is running, cells can be selected.
    if (gameStatus === "challenge") {
      return blueCells.includes(number) ? "blue" : "unselected";
    }

    // If the cell has not been selected yet
    if (!selectedCells.includes(number)) {
      return "unselected";
    }

    // If the randomized blue cells do not contain the cell selected during an active game
    if (!blueCells.includes(number)) {
      return "incorrect";
    }

    // Otherwise return a correct guess
    return "correct";
  };

  const onStartClick = () => {
    console.log("Started");
  };

  const onCellClick = (number) => {
    // TODO: Create a game status to check (Starting, Displaying, Active, Over)
    console.log("Cell click", { number });
    console.log(gameStatus);
    console.log(challengeSecondsLeft);

    if (gameStatus === "inactive" || gameStatus !== "active") {
      return;
    }

    // If the cell has already been selected
    if (selectedCells.includes(number)) {
      return;
    }

    // Add the selected number to the set of selected cells
    setSelectedCells(selectedCells.concat(number));

    // Check to see if the selection was correct or not
    if (blueCells.includes(number)) {
      setMatchedCells(matchedCells + 1);
    } else {
      setIncorrectGuessesRemaining(incorrectGuessesRemaining - 1);
    }
  };

  return (
    <>
      <div className='game'>
        <Game
          selected_cells={blueCells}
          onCellClick={onCellClick}
          onStartClick={onStartClick}
          status={cellStatus}
        />
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
