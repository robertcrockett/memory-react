import React from "react";
import PropTypes from "prop-types";

/**
 * Footer Component
 * 
 * @param {gameStatus, challengeSecondsLeft, secondsLeft, onClick} props Destructed property
 *      values for various properties of the Footer.
 * @returns A JSX button object representing a Footer.
 */
function Footer({ gameStatus, challengeSecondsLeft, secondsLeft, onClick }) {
  const displayMessage = () => {
    switch (gameStatus) {
      case "challenge":
        return messages.start;
      case "active":
        return messages.mid_game;
      case "lost":
        return messages.lost;
      case "won":
        return messages.won;

      default:
        return messages.initial;
    }
  };

  const displayTimer = () => {
    if (gameStatus === "challenge") {
      return challengeSecondsLeft;
    }

    return secondsLeft;
  };

  return (
    <>
      <div className='footer' data-testid='footer'>
        <div className='message' data-testid='message'>{displayMessage()}</div>
        {gameStatus !== "challenge" && gameStatus !== "active" ? (
          <button
            className='button'
            data-testid='start_button'
            onClick={onClick}
          >
            {initial_btn}
          </button>
        ) : (
          <div className='timer' data-testid='timer'>
            {displayTimer()}
          </div>
        )}
      </div>
    </>
  );
}

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  challengeSecondsLeft: PropTypes.number.isRequired,
  secondsLeft: PropTypes.number.isRequired,
};

export const MemoizedFooter = React.memo(Footer);

// Available messages
const messages = {
  initial: "You will have a few seconds to memorize the blue random cells",
  start: "Remember these blue cells now",
  mid_game: "Which cells were blue?",
  lost: "Game Over",
  won: "Victory!",
};

const initial_btn = "Start Game";
