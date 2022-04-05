import React from 'react';
import {Square} from './Square';

export class Board extends React.Component {

  renderSquare(i) {
    // add one new prop to Square
    let isWinner = false;
    if (this.props.winner && this.props.winner.includes(i)) {
      // only the winning row index has the value true
      isWinner = true;    
    }

    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isWinner={isWinner}
      />
    );
  }

  render() {
    return (
      <div>
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