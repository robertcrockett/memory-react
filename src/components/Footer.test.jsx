import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

function footerClick() {
  return "true";
}

describe("renders the Footer component when the Game is Not Active", () => {
  it("renders a Footer", () => {
    render(
      <Footer
        onClick={() => footerClick}
        gameStatus='initial'
        challengeSecondsLeft={1}
        secondsLeft={5}
      />
    );

    // Test to validate the start button is rendered
    const footerButton = screen.getByTestId("start_button");
    expect(footerButton).toBeTypeOf("object");

    // Test to validate the timer is not rendered
    const footerTimer = screen.queryByTestId("timer");
    expect(footerTimer).toBeNull();
  });
});
