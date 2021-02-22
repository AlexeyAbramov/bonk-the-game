const Cell = (props) => {
  const { box, currentBox } = props;
  console.log(props);
  return (
    <div
      className={`cell ${currentBox === box ? "mole" : ""}`}
      onClick={currentBox === box ? props.plusScore : null}
    ></div>
  );
};

export default Cell;
