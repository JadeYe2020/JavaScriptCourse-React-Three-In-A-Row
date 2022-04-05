export function Square(props) { // a functional react component
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}