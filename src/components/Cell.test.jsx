import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoizedCell } from "./Cell";

// Create a mock function for cellStatus
const cellStatusMock = vi.fn();
const cellClickMock = vi.fn();

// Test for rendering the Cell component when unselected
describe("Renders the Cell component when unselected", () => {
  it("renders a cell", () => {
    render(
      <MemoizedCell
        cellValue={1}
        cellStatus={() => cellStatusMock.mockReturnValue("unselected").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton).toHaveClass("unselected");
    expect(cellButton).toHaveClass("cell");
  });
});

// Test for rendering the Cell component when the cell is part of the challenge
describe("Renders the Cell component when it is part of challenge", () => {
  it("renders a cell", () => {
    render(
      <MemoizedCell
        cellValue={1}
        cellStatus={() => cellStatusMock.mockReturnValue("blue").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton).toHaveClass("blue");
    expect(cellButton).toHaveClass("cell");
  });
});

// Test for rendering the Cell component when correctly selected
describe("Renders the Cell component when correctly selected", () => {
  it("renders a cell", () => {
    render(
      <MemoizedCell
        cellValue={2}
        cellStatus={() => cellStatusMock.mockReturnValue("correct").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton).toHaveClass("correct");
    expect(cellButton).toHaveClass("cell");
  });
});

// Test for rendering the Cell component when incorrectly selected
describe("Renders the Cell component when incorrectly selected", () => {
  it("renders a cell", () => {
    render(
      <MemoizedCell
        cellValue={3}
        cellStatus={() => cellStatusMock.mockReturnValue("incorrect").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton).toHaveClass("incorrect");
    expect(cellButton).toHaveClass("cell");
  });
});

// Test for rendering a Cell after a click event
describe("Renders the Cell component after a click event", () => {
  it("renders a cell", () => {
    render(
      <MemoizedCell
        cellValue={4}
        cellStatus={() => cellStatusMock.mockReturnValue("unselected").apply()}
        onClick={() => cellClickMock}
      />
    );

    const cellButton = screen.getByTestId("cell");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton).toHaveClass("unselected");
    expect(cellButton).toHaveClass("cell");

    // Create a spy on the cell click event
    const cellClickSpy = vi.spyOn(cellButton, "click");
    cellButton.click(screen.getByTestId);
    expect(cellClickSpy).toBeCalledTimes(1);
  });
});
