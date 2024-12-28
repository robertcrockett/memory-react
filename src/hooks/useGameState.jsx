import { useEffect, useState } from "react";
import { utils } from "../shared/constants";

/**
 * A custom hook to manage the game state
 * 
 * @returns state values and functions to manage the game state
 */
export function useGameState() {
  // Managing State and Hooks
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

  const setInitialGameState = () => {
    setStarted(true);
    setIncorrectGuessesRemaining(3);
    setMatchedCells(0);
    setSelectedCells([]);
    setChallengeSecondsLeft(4);
    setSecondsLeft(10);
    setBlueCells(utils.shuffle(utils.range(1, 25)).slice(0, 6));
  };

  const setCellClick = (number) => {
    // Add the selected number to the set of selected cells
    setSelectedCells(selectedCells.concat(number));

    // Check to see if the selection was correct or not
    if (blueCells.includes(number)) {
      setMatchedCells(matchedCells + 1);
    } else {
      setIncorrectGuessesRemaining(incorrectGuessesRemaining - 1);
    }
  }

  const updateStarted = (value) => {
    setStarted(value);
  };

  const updateSecondsLeft = (value) => {
    setSecondsLeft(value);
  }

  const updateChallengeSecondsLeft = (value) => {
    setChallengeSecondsLeft(value);
  }

  return { started, incorrectGuessesRemaining, matchedCells, selectedCells, challengeSecondsLeft, secondsLeft, blueCells, setInitialGameState, setCellClick, updateStarted, updateSecondsLeft, updateChallengeSecondsLeft };
}