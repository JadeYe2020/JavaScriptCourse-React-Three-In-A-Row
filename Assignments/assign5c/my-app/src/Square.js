export function Square(props) {
  let className = "square";
  let onClick = null;
  
  if (props.canToggle) {
    // only togglable squares have onClick
    onClick = props.onClick;
  }
  
  if (props.currentState === 0) {
    className += " state0"
  } else if (props.currentState === 1) {
    className += " state1"    
  } else {
    className += " state2"
  }

  return (
    <button className={ className }
    onClick={ onClick }
    ></button>
  );
}