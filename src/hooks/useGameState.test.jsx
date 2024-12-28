import { renderHook } from '@testing-library/react'
import { act } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { useGameState } from './useGameState';

// Mocking utils
vi.mock('../shared/constants', () => ({
    utils: {
        shuffle: (array) => array,
        range: (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start),
    },
}));

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

    it('counts down challenge seconds when started', async () => {
        const { result } = renderHook(() => useGameState());

        act(() => {
            result.current.setInitialGameState();
            result.current.started = true;
        });

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 3 seconds
        });

        expect(result.current.challengeSecondsLeft).toBe(3);
    });

    it('counts down game seconds when challenge is over', async () => {
        const { result } = renderHook(() => useGameState());

        act(() => {
            result.current.setInitialGameState();
            result.current.started = true;
            result.current.challengeSecondsLeft = 0
            result.current.secondsLeft = 11;
        });

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 3 seconds
        });

        expect(result.current.secondsLeft).toBe(10);
    });

    it('counts down game seconds when challenge is over and secondsLeft is greater than 1', async () => {
        const { result } = renderHook(() => useGameState());

        act(() => {
            result.current.setInitialGameState();
            result.current.updateStarted(true);
            result.current.updateChallengeSecondsLeft(0);
            result.current.updateSecondsLeft(3);
        });

        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        });

        expect(result.current.secondsLeft).toBe(2);
    });
});
