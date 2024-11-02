// useCountdown.test.js
import { renderHook } from '@testing-library/react'
import { act } from 'react';
import { expect, it, describe, beforeEach, afterEach } from 'vitest';
import useCountdown from './useCountdown';

describe('useCountdown', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should initialize with the initial value', () => {
        const { result } = renderHook(() => useCountdown(10));
        expect(result.current).toBe(10);
    });

    it('should decrement the countdown value every second', () => {
        const { result } = renderHook(() => useCountdown(10));

        act(() => {
            vi.advanceTimersByTime(1000);
        });
        expect(result.current).toBe(9);

        act(() => {
            vi.advanceTimersByTime(1000);
        });
        expect(result.current).toBe(8);
    });

    it('should clear the interval when the component is unmounted', () => {
        const { result, unmount } = renderHook(() => useCountdown(10));

        unmount();

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        expect(result.current).toBe(10); // Countdown should not decrement after unmount
    });
});
