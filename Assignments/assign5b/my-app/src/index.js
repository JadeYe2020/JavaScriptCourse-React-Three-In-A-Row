import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// no long need a class component for square - no state and just rendering
// class Square extends React.Component {

//     // remove constructor - no more state in here

//     render() {
//       return (
//         <button
//             className="square"
//             onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

function Square(props) { // a functional react component
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props); // passing any props we get up to parent constructor
    this.state = { // initializing our state
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  // handleClick will live here - because it needs to update state
  handleClick(i) {
    // const history = this.state.history;
    // const current = history[history.length - 1];
    // treat state objects as immutable
    const squares = this.state.squares.slice(); // use slice() to create a copy of the array

    if (calculateWinner(squares) || squares[i]) { // if winner or something already in the squre, do nothing
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'; // when we click set to X or O based on whose turn it is
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) { // 'X' and 'O' will be truthy, null will be falsey
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {  

  render() {    

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

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