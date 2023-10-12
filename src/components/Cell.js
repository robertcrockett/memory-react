function Cell({ cellStatus, cellValue, onClick }) {
  return (
    <button
      className='cell'
      style={{
        width: "20%",
        backgroundColor: colors[cellStatus(cellValue)],
      }}
      onClick={() => onClick(cellValue, cellStatus(cellValue))}
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
