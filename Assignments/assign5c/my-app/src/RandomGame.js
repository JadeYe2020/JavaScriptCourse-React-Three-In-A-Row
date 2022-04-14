import React from "react";
import axios from 'axios';
import { Board } from './Board';

export class RandomGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      showWrong: false, // determine whether to show wrong squares
      progress: "", // message after check
    };
  }          

  componentDidMount() {
    axios.get('https://threeinarowpuzzle.herokuapp.com/random')
      .then(res => {
        const rows = res.data.rows;
        this.setState({ rows });
      })
  }

  // the onClick handler for squares
  handleClick(i, j) {
    const rows = this.state.rows.slice();

    if (rows[i][j].currentState === 2) {
      // change the value from state 2 to state 0
      rows[i][j].currentState = 0;
    } else {
      // from state 0 to 1 or from state 1 to 2
      rows[i][j].currentState ++;
    }
    
    this.setState({ rows });
  }

  // a function to get the current results of all squares
  currentResults() {
    const rows = this.state.rows;

    // return a 2d array of boolean values or null values
    return rows.map((row) => 
      row.map((square) =>  {
        if (square.currentState === 0) {
          return null; // empty squares
        } else if (square.correctState !== square.currentState) {
          return false; // wrong squares
        } else { return true; }
      })
    );
  }

  // event handler for checkbox onChange
  handleChange() {      
    const showWrong = this.state.showWrong;
    this.setState({
      showWrong: !showWrong,
    })
  }

  // event handler for check button onClick
  checkBtnClicked() {
    const correctSqr = this.currentResults();

    this.setState({
      progress: checkProgress(correctSqr),
    });
  }

  render() {     

    return (
      <div>
        <h2>Random Game</h2>
        <button id="reload" onClick={() => window.location.reload()}>Reload</button>
        <div className="game">
          <div className="game-board">
            <Board 
              rows={this.state.rows}
              onClick={(i, j) => this.handleClick(i, j)}
              currentResults={ this.currentResults() }
              showWrong={this.state.showWrong}
            />
          </div>
        </div>
        <div id="checkbox">
          <label htmlFor="showWrong">Show incorrect squares </label>
          <input id="showWrong" type="checkbox"
          onChange={() => this.handleChange()}></input>
        </div>
        <div id="button">
          <button id="checkBtn"
            onClick={() => this.checkBtnClicked()}>Check</button>
          <div>{this.state.progress}</div>
        </div>
      </div>
    );
  }
}

// helper function to check how many incorrect squares
function checkProgress(rows) {
  // let wrongSqr = 0;
  var emptySqr = 0;

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      let boolVal = rows[i][j];
      if (boolVal === false) {
        return "Something is wrong.";
      } 
      
      if (boolVal === null) {
        emptySqr ++;
      }
    }
  }

  if (!emptySqr) {
    // when there's neither incorrect grid nor grey ones
    return "You did it!!";
  } else { 
    // when there's no incorrect grid but there's still grids at empty state
    return "So far so good"; 
  }
}