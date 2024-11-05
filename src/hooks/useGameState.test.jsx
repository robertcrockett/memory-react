import { renderHook } from '@testing-library/react'
import { act } from 'react';
import { describe, it, expect } from 'vitest';
import { useGameState } from './useGameState';

describe('useGameState hook', () => {
    it('initializes with correct default values', () => {
        const { result } = renderHook(() => useGameState());

        expect(result.current.started).toBe(false);
        expect(result.current.incorrectGuessesRemaining).toBe(3);
        expect(result.current.matchedCells).toBe(0);
        expect(result.current.selectedCells).toEqual([]);
        expect(result.current.challengeSecondsLeft).toBe(0);
        expect(result.current.secondsLeft).toBe(10);
        expect(result.current.blueCells.length).toBe(6);
    });

    it('sets initial game state correctly', () => {
        const { result } = renderHook(() => useGameState());

        act(() => {
            result.current.setInitialGameState();
        });

        expect(result.current.started).toBe(true);
        expect(result.current.incorrectGuessesRemaining).toBe(3);
        expect(result.current.matchedCells).toBe(0);
        expect(result.current.selectedCells).toEqual([]);
        expect(result.current.challengeSecondsLeft).toBe(4);
        expect(result.current.secondsLeft).toBe(10);
        expect(result.current.blueCells.length).toBe(6);
    });

    it('handles cell click correctly', () => {
        const { result } = renderHook(() => useGameState());

        act(() => {
            result.current.setInitialGameState();
        });

        const blueCell = result.current.blueCells[0];
        const nonBlueCell = 100;

        act(() => {
            result.current.setCellClick(blueCell);
        });

        expect(result.current.matchedCells).toBe(1);
        expect(result.current.selectedCells).toContain(blueCell);

        act(() => {
            result.current.setCellClick(nonBlueCell);
        });

        expect(result.current.incorrectGuessesRemaining).toBe(2);
        expect(result.current.selectedCells).toContain(nonBlueCell);
    });
});
