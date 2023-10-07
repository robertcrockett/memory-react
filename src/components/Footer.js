function Footer() {
  const initial_msg =
    "You will have a few seconds to memorize the blue random cells";
  const initial_btn = "Start Game";

  return (
    <>
      <div className='message'>{initial_msg}</div>
      <button className='button'>{initial_btn}</button>
    </>
  );
}

export default Footer;
