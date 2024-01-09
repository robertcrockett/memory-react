import { useGameState } from "../hooks/useGameState";
import Game from "./Game";
import "./GameApp.css";

/**
 * Game App Component
 * 
 * @returns A JSX object representing the Game App
 */
function GameApp() {
  const { started, incorrectGuessesRemaining, matchedCells, selectedCells, challengeSecondsLeft, secondsLeft, blueCells, setInitialGameState, setCellClick } = useGameState();

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
    setInitialGameState();
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

    setCellClick(number);
  };

  return (
    <div className='game' data-testid='game'>
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
