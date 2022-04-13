export function Square(props) {
  let className = "square";
  let onClick = null;
  
  if (!props.canToggle) {
    // set untogglable squares to state0 class
    className += " state0"
  } else {
    // only togglable squares have onClick
    onClick = props.onClick;
  }

  return (
    <button className={ className }
    onClick={ onClick }
    ></button>
  );
}