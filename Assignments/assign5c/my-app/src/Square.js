export function Square(props) {
  let className = "square"; // default class
  let onClick = null;
  
  if (props.canToggle) {
    // only togglable squares have onClick
    onClick = props.onClick;
  }
  
  // add a class to indicate the state/color
  if (props.currentState === 0) {
    className += " state0"
  } else if (props.currentState === 1) {
    className += " state1"    
  } else {
    className += " state2"
  }

  // when checkbox is checked and the current result of the sqare is false
  if (props.showWrong && props.isCorrect === false) {
    className += " wrongSqr";
  }

  return (
    <button className={ className }
    onClick={ onClick }
    ></button>
  );
}