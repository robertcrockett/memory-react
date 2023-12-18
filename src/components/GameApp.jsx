import { useEffect, useState } from "react";
import Game from "./Game";
import "./GameApp.css";
import { utils } from "../shared/constants";

/**
 * 
 * @returns A JSX object representing the Game Board
 */
function GameApp() {
  const [started, setStarted] = useState(false);
  const [incorrectGuessesRemaining, setIncorrectGuessesRemaining] = useState(3);
  const [matchedCells, setMatchedCells] = useState(0);
  const [selectedCells, setSelectedCells] = useState([]);
  const [challengeSecondsLeft, setChallengeSecondsLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [blueCells, setBlueCells] = useState(
    utils.shuffle(utils.range(1, 25)).slice(0, 6)
  );

  useEffect(() => {
    if (started === true && challengeSecondsLeft > 0) {
      const timerId = setTimeout(() => {
        setChallengeSecondsLeft(challengeSecondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }

    if (started === true && challengeSecondsLeft === 0 && secondsLeft > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const resetGame = () => {
    setIncorrectGuessesRemaining(3);
    setMatchedCells(0);
    setSelectedCells([]);
    setChallengeSecondsLeft(4);
    setSecondsLeft(10);
    setBlueCells(utils.shuffle(utils.range(1, 25)).slice(0, 6));
  };

  const gameStatus =
    // Nested ternary operators. This is less readable then if/else statement (IMO)
    started === false
      ? "new"
      : matchedCells === blueCells.length
      ? "won"
      : challengeSecondsLeft > 0
      ? "challenge"
      : secondsLeft === 0 || incorrectGuessesRemaining === 0
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
    setStarted(true);
    resetGame();
  };

  const onCellClick = (number) => {
    // If the game has yet to be initialized and is not currently active, ignore any clicks
    if (gameStatus === "new" || gameStatus !== "active") {
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
    <div className='game'>
      <Game
        selected_cells={blueCells}
        onCellClick={onCellClick}
        onStartClick={onStartClick}
        cellStatus={cellStatus}
        gameStatus={gameStatus}
        challengeSecondsLeft={challengeSecondsLeft}
        secondsLeft={secondsLeft}
      />
    </div>
  );
}

export default GameApp;
