import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Cell from "./Cell";

// Create a mock function for cellStatus
const cellStatusMock = vi.fn();
const cellClickMock = vi.fn();

// Test for rendering the Cell component when unselected
describe("Renders the Cell component when unselected", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={1}
        cellStatus={() => cellStatusMock.mockReturnValue("unselected").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("white");
  });
});

// Test for rendering the Cell component when the cell is part of the challenge
describe("Renders the Cell component when it is part of challenge", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={1}
        cellStatus={() => cellStatusMock.mockReturnValue("blue").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("lightblue");
  });
});

// Test for rendering the Cell component when correctly selected
describe("Renders the Cell component when correctly selected", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={2}
        cellStatus={() => cellStatusMock.mockReturnValue("correct").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("lightgreen");
  });
});

// Test for rendering the Cell component when incorrectly selected
describe("Renders the Cell component when incorrectly selected", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={3}
        cellStatus={() => cellStatusMock.mockReturnValue("incorrect").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("lightcoral");
  });
});
