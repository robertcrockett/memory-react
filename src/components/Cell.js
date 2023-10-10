function Cell(props) {
  return (
    <button
      className='cell'
      style={{
        width: "20%",
        backgroundColor: colors[props.cellStatus(props.cellValue)],
      }}
      onClick={() =>
        props.onClick(props.cellValue, props.cellStatus(props.cellValue))
      }
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
