import React from "react";
import { render, screen } from "@testing-library/react";
import test from "node:test";
import { expect } from "vitest";
import Cell from "./Cell";

function cellStatus() {
  return "unselected";
}

function isBlue() {
  return "true";
}

test("renders a cell", () => {
  render(<Cell cellValue={1} cellStatus={() => cellStatus()} />);

  const cellButton = screen.getByRole("button");
  expect(cellButton).toBeTypeOf("object");
});
// describe("Cell", () => {
//   it("renders a cell", () => {
//     render(<Cell />);
//     expect(screen.getByTestId("cell")).toBeInTheDocument();
//   });
// });
// ```
