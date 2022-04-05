import React from 'react';
import {Board} from './Board';

// a stateless functional component to display the number of moves for each player at any given moment in the game.
function MoveCounter(props) {

  return (
    <div className="move-counter">
      <div>X Move Count: {props.xCount}</div>
      <div>O Move Count: {props.oCount}</div>
    </div>
  );
}

export class Game extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  // handleClick will live here - because it needs to update state
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // the "future" history should be considered
    const current = history[history.length - 1];
    // treat state objects as immutable
    const squares = current.squares.slice(); // use slice() to create a copy of the array

    if (calculateWinner(squares) || squares[i]) { // if winner or something already in the squre, do nothing
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'; // when we click set to X or O based on whose turn it is
    this.setState({
      history: history.concat([{ // unlike push(), the contact() doesn't mutate the original array
        squares: squares,
      }]),
      stepNumber: history.length, 
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const xCount = current.squares.filter( value => value === 'X').length;
    const oCount = current.squares.filter( value => value === 'O').length;

    const moves = history.map((step, move) => {
      const desc = move ?
        "Go to move #" + move :
        "Go to game start";
      
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <br />
          <MoveCounter 
            xCount={xCount}
            oCount={oCount}
          />
        </div>        
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


// HELPER FUNCTIONS - often Vanilla JS
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}