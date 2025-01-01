import { useEffect, useState } from "react";
import { utils } from "../shared/constants";

interface GameState {
  started: boolean;
  incorrectGuessesRemaining: number;
  matchedCells: number;
  selectedCells: number[];
  challengeSecondsLeft: number;
  secondsLeft: number;
  blueCells: number[];
  setInitialGameState: () => void;
  setCellClick: (number: number) => void;
  updateStarted: (value: boolean) => void;
  updateSecondsLeft: (value: number) => void;
  updateChallengeSecondsLeft: (value: number) => void;
}

/**
 * A custom hook to manage the game state
 * 
 * @returns state values and functions to manage the game state
 */
export function useGameState(): GameState {
  // Managing State and Hooks
  const [started, setStarted] = useState<boolean>(false);
  const [incorrectGuessesRemaining, setIncorrectGuessesRemaining] = useState<number>(3);
  const [matchedCells, setMatchedCells] = useState<number>(0);
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [challengeSecondsLeft, setChallengeSecondsLeft] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(10);
  const [blueCells, setBlueCells] = useState<number[]>(
    utils.shuffle(utils.range(1, 25)).slice(0, 6)
  );

  useEffect(() => {
    if (started && challengeSecondsLeft > 0) {
      const timerId = setTimeout(() => {
        setChallengeSecondsLeft(challengeSecondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }

    if (started && challengeSecondsLeft === 0 && secondsLeft > 0) {
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

  const setCellClick = (number: number) => {
    // Add the selected number to the set of selected cells
    setSelectedCells(selectedCells.concat(number));

    // Check to see if the selection was correct or not
    if (blueCells.includes(number)) {
      setMatchedCells(matchedCells + 1);
    } else {
      setIncorrectGuessesRemaining(incorrectGuessesRemaining - 1);
    }
  }

  const updateStarted = (value: boolean) => {
    setStarted(value);
  };

  const updateSecondsLeft = (value: number) => {
    setSecondsLeft(value);
  }

  const updateChallengeSecondsLeft = (value: number) => {
    setChallengeSecondsLeft(value);
  }

  return { started, incorrectGuessesRemaining, matchedCells, selectedCells, challengeSecondsLeft, secondsLeft, blueCells, setInitialGameState, setCellClick, updateStarted, updateSecondsLeft, updateChallengeSecondsLeft };
}