function Cell(props) {
  return (
    <button
      className='cell'
      style={{ width: "20%", backgroundColor: colors["unselected"] }}
      onClick={() => props.onClick(props.cellValue)}
    ></button>
  );
}

export default Cell;

// Color Theme
const colors = {
  unselected: "white",
  blue: "lightblue",
  correct: "lightgreen",
  incorrect: "lightcoral",
};
