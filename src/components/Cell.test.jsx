import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Cell from "./Cell";

function cellStatus_unselected() {
  return "unselected";
}

function cellStatus_challenge() {
  return "blue";
}

function cellStatus_correct() {
  return "correct";
}

function cellStatus_incorrect() {
  return "incorrect";
}

function cellClick() {
  return "true";
}

describe("Renders the Cell component when unselected", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={1}
        cellStatus={() => cellStatus_unselected()}
        onClick={() => cellClick}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("white");
  });
});

describe("Renders the Cell component when it is part of challenge", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={1}
        cellStatus={() => cellStatus_challenge()}
        onClick={() => cellClick}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("lightblue");
  });
});

describe("Renders the Cell component when correctly selected", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={2}
        cellStatus={() => cellStatus_correct()}
        onClick={() => cellClick}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("lightgreen");
  });
});

describe("Renders the Cell component when incorrectly selected", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={3}
        cellStatus={() => cellStatus_incorrect()}
        onClick={() => cellClick}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
    expect(cellButton.style.backgroundColor).toBe("lightcoral");
  });
});
