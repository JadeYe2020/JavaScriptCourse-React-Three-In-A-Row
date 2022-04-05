export function Square(props) { // a functional react component
  let className = "square";
  
  // if the new prop value is true, then add a new class called winner
  // reference: https://reactjs.org/docs/faq-styling.html
  if (props.isWinner) {
    className += " winner";
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}