function Message() {
  return <div className='message'>{messages.initial}</div>;
}

export default Message;

// Available messages
const messages = {
  initial: "You will have a few seconds to memorize the blue random cells",
  start: "Remember these blue cells now",
  mid_game: "Which cells were blue?",
  lost: "Game Over",
  won: "Victory!",
};
