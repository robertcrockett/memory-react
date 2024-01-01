import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GameApp from "./GameApp";

// Write a test to validate GameApp renders Game component
describe("Renders the GameApp component", () => {
  it("renders a GameApp", () => {
    render(<GameApp />);

    // Test to validate the game is rendered
    const game = screen.getByTestId("game");
    expect(game).toBeTypeOf("object");
  });
});
