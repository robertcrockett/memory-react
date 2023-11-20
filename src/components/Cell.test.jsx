import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Cell from "./Cell";

function cellStatus() {
  return "unselected";
}

function cellClick() {
  return "true";
}

describe("renders the Cell component", () => {
  it("renders a cell", () => {
    render(
      <Cell
        cellValue={1}
        cellStatus={() => cellStatus()}
        onClick={() => cellClick}
      />
    );

    const cellButton = screen.getByRole("button");
    expect(cellButton).toBeTypeOf("object");
  });
});
