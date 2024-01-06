import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Game from "./Game";

const onCellClickMock = vi.fn();
const onStartClickMock = vi.fn();

// Write a test to validate Game renders Footer and Cell components
describe("Renders the Game component", () => {
  it("renders a Game", () => {
    render(
      <Game
        cellStatus={() => {
          return 1;
        }}
        selected_cells={[1, 2, 3]}
        onCellClick={onCellClickMock}
        onStartClick={onStartClickMock}
        gameStatus='initial'
        challengeSecondsLeft={5}
        secondsLeft={0}
      />
    );
    
    // Test to validate the footer is rendered
    const footer = screen.getByTestId("footer");
    expect(footer).toBeTypeOf("object");
  });
});
