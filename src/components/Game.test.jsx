import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Game from "./Game";

// Write a test to validate Game renders Footer and Cell components
describe("Renders the Game component", () => {
  it("renders a Game", () => {
    render(<Game />);
    // Test to validate the footer is rendered
    const footer = screen.getByTestId("footer");
    expect(footer).toBeTypeOf("object");

    // Test to validate the cell is rendered
    const cell = screen.getByTestId("cell");
    expect(cell).toBeTypeOf("object");
  });
});
