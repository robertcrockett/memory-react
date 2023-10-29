import PropTypes from "prop-types";

function Footer(props) {
  const displayMessage = () => {
    if (props.gameStatus === "challenge") {
      return messages.start;
    }

    if (props.gameStatus === "active") {
      return messages.mid_game;
    }

    if (props.gameStatus === "lost") {
      return messages.lost;
    }

    if (props.gameStatus === "won") {
      return messages.won;
    }

    return messages.initial;
  };

  const displayTimer = () => {
    if (props.gameStatus === "challenge") {
      return props.challengeSecondsLeft;
    }

    return props.secondsLeft;
  };

  return (
    <>
      <div className='message'>{displayMessage()}</div>
      {props.gameStatus !== "challenge" && props.gameStatus !== "active" ? (
        <button className='button' onClick={props.onClick}>
          {initial_btn}
        </button>
      ) : (
        <div className='timer'>{displayTimer()}</div>
      )}
    </>
  );
}

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
  challengeSecondsLeft: PropTypes.number.isRequired,
  secondsLeft: PropTypes.number.isRequired,
};

export default Footer;

// Available messages
const messages = {
  initial: "You will have a few seconds to memorize the blue random cells",
  start: "Remember these blue cells now",
  mid_game: "Which cells were blue?",
  lost: "Game Over",
  won: "Victory!",
};

const initial_btn = "Start Game";
