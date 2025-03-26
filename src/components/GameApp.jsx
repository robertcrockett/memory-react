import {useCallback, useMemo} from "react";
import {useGameState} from "../hooks/useGameState";
import {MemoizedGame} from "./Game";
import "./GameApp.css";

/**
 * Game App Component
 *
 * @returns A JSX object representing the Game App
 */
function GameApp() {
  const {
    started,
    incorrectGuessesRemaining,
    matchedCells,
    selectedCells,
    challengeSecondsLeft,
    secondsLeft,
    blueCells,
    setInitialGameState,
    setCellClick
  } = useGameState();

  const gameStatus = useMemo(() => {
    if (started === false) return "new";
    if (matchedCells === blueCells.length) return "won";
    if (challengeSecondsLeft > 0) return "challenge";
    if (secondsLeft === 0 || incorrectGuessesRemaining === 0) return "lost";
    return "active";
  }, [started, matchedCells, blueCells.length, challengeSecondsLeft, secondsLeft, incorrectGuessesRemaining]);


  const cellStatus = useCallback(
    (number) => {
      // If the game is in the challenge phase, return the appropriate cell status
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
    },
    [gameStatus, blueCells, selectedCells]
  );

  const onStartClick = useCallback(() => {
    setInitialGameState();
  }, [setInitialGameState]);

  const onCellClick = useCallback(
    (number) => {
      // If the game has yet to be initialized and is not currently active, ignore any clicks
      if (gameStatus === "new" || gameStatus !== "active") {
        return;
      }

      // If the cell has already been selected
      if (selectedCells.includes(number)) {
        return;
      }

      setCellClick(number);
    },
    [gameStatus, selectedCells, setCellClick]
  );

  return (
    <div className='game' data-testid='game'>
      <MemoizedGame
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
