function Square(props: any) {
  return (
    <button
      className={`square ${props.shade}`}
      style={props.style}
      key={props.keyVal}
    ></button>
  );
}

export default Square;
