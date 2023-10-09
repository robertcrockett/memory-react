function Cell(props) {
  return (
    <div key={props.number} className='cell' style={{ width: "20%" }}></div>
  );
}

export default Cell;
