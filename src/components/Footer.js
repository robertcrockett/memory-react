function Footer(props) {
  const isHidden = () => {
    if (props.gameStatus === "challenge" || props.gameStatus === "active") {
      return true;
    }
    return false;
  };

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

  return (
    <>
      <div className='message'>{displayMessage()}</div>
      <button
        className='button'
        onClick={props.onClick}
        hidden={isHidden()}
        // props.gameStatus === "challenge" || props.gameStatus === "active"
      >
        {initial_btn}
      </button>
    </>
  );
}

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
