import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

function footerClick() {
  return "true";
}

describe("renders the Footer component", () => {
  it("renders a Footer", () => {
    render(
      <Footer
        onClick={() => footerClick}
        gameStatus='challenge'
        challengeSecondsLeft={1}
        secondsLeft={5}
      />
    );

    const footerButton = screen.getByRole("button");
    expect(footerButton).toBeTypeOf("object");
  });
});
