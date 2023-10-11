function Footer() {
  return (
    <>
      <div className='message'>{messages.initial}</div>
      <button className='button'>{initial_btn}</button>
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
