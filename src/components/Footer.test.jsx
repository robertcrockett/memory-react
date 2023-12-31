import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Footer from "./Footer";

const footerClickMock = vi.fn();

describe("Renders the Footer component when the Game is in the initial state", () => {
  it("renders a Footer", () => {
    render(
      <Footer
        onClick={() => footerClickMock}
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

    // Validate the initial message
    const footerMessage = screen.getByTestId("message");
    expect(footerMessage).toHaveTextContent("You will have a few seconds to memorize the blue random cells");
  });
});

describe("Renders the Footer component when the Game is setting the challenge", () => {
  it("renders a Footer", () => {
    render(
      <Footer
        onClick={() => footerClickMock}
        gameStatus='challenge'
        challengeSecondsLeft={1}
        secondsLeft={5}
      />
    );

    // Test to validate the start button is not rendered
    const footerButton = screen.queryByTestId("start_button");
    expect(footerButton).toBeNull();

    // Test to validate the timer is rendered
    const footerTimer = screen.queryByTestId("timer");
    expect(footerTimer).toBeTypeOf("object");

    // Validate the challenge message
    const footerMessage = screen.getByTestId("message");
    expect(footerMessage).toHaveTextContent("Remember these blue cells now");
  });
});

describe("Renders the Footer component when the Game is active", () => {
  it("renders a Footer", () => {
    render(
      <Footer
        onClick={() => footerClickMock}
        gameStatus='active'
        challengeSecondsLeft={0}
        secondsLeft={5}
      />
    );

    // Test to validate the start button is not rendered
    const footerButton = screen.queryByTestId("start_button");
    expect(footerButton).toBeNull();

    // Test to validate the timer is rendered
    const footerTimer = screen.queryByTestId("timer");
    expect(footerTimer).toBeTypeOf("object");

    // Validate the message while the game is running
    const footerMessage = screen.getByTestId("message");
    expect(footerMessage).toHaveTextContent("Which cells were blue?");
  });
});

describe("Renders the Footer component when the Game is won", () => {
  it("renders a Footer", () => {
    render(
      <Footer
        onClick={() => footerClickMock}
        gameStatus='won'
        challengeSecondsLeft={0}
        secondsLeft={5}
      />
    );

    // Test to validate the start button is now rendered
    const footerButton = screen.queryByTestId("start_button");
    expect(footerButton).toBeTypeOf("object");

    // Test to validate the timer is no longer rendered
    const footerTimer = screen.queryByTestId("timer");
    expect(footerTimer).toBeNull();

    // Validate the message when the game is won
    const footerMessage = screen.getByTestId("message");
    expect(footerMessage).toHaveTextContent("Victory!");
  });
});

describe("Renders the Footer component when the Game is lost", () => {
  it("renders a Footer", () => {
    render(
      <Footer
        onClick={() => footerClickMock}
        gameStatus='lost'
        challengeSecondsLeft={0}
        secondsLeft={5}
      />
    );

    // Test to validate the start button is now rendered
    const footerButton = screen.queryByTestId("start_button");
    expect(footerButton).toBeTypeOf("object");

    // Test to validate the timer is no longer rendered
    const footerTimer = screen.queryByTestId("timer");
    expect(footerTimer).toBeNull();

    // Validate the message when the game is lost
    const footerMessage = screen.getByTestId("message");
    expect(footerMessage).toHaveTextContent("Game Over");
  });
});