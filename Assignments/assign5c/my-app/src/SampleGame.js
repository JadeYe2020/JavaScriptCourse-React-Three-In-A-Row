import React from "react";
import axios from 'axios';
import { Board } from './Board';
import { Square } from "./Square";

export class SampleGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            // checkProgress: false,
            showWrong: false,
            progress: "",
        };
    }       

    componentDidMount() {
        axios.get('https://threeinarowpuzzle.herokuapp.com/sample')
        // axios.get('https://threeinarowpuzzle.herokuapp.com/random')
            .then(res => {
                const rows = res.data.rows;
                this.setState({ rows });
            })
    }

    handleClick(i, j) {
      const rows = this.state.rows;

      if (rows[i][j].currentState === 2) {
        // change the value from state 2 to state 0
        rows[i][j].currentState = 0;
      } else {
        // from state 0 to 1 or from state 1 to 2
        rows[i][j].currentState ++;
      }
      
      this.setState({ rows });
    }

    correctSquare() {
      const rows = this.state.rows;

      // return a 2d array of boolean values or null values
      return rows.map((row) => 
          [
            row.map((square) =>  {
              if (square.currentState === 0) {
                return null;
              } else if (square.correctState !== square.currentState) {
                return false;
              } else { return true; } 
            })
          ]        
        );
    }

    onChecked() {
      let showWrong = this.state.showWrong;

      this.setState({
        showWrong: !showWrong
      })
    }



    render() {

      return (
        <div>
          <h2>Sample Game</h2>
          <button id="reload">Reload</button>
          <div className="game">
            <div className="game-board">
              <Board 
                rows={this.state.rows}
                onClick={(i, j) => this.handleClick(i, j)}
                wrongSqr={ this.correctSquare() }
                showWrong={this.state.showWrong}
                // checkProgress= {this.state.checkProgress}
              />
            </div>
          </div>
          <div id="checkbox">
            <label htmlFor="showWrong">Show incorrect squares </label>
            <input id="showWrong" type="checkbox"></input>
          </div>
          <div id="button">
            <button id="checkBtn"
              onClick={() => {
                this.setState({
                  progress: checkProgress(this.state.rows),
                });                
              } }>Check</button>
            <div>{this.state.progress}</div>
          </div>
        </div>
      );
    }
}

// helper function to check how many incorrect squares
function checkProgress(rows) {
  // let wrongSqr = 0;
  let emptySqr = 0;

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if (rows[i][j] === false) {
        return "Something is wrong.";
      } 
      
      if (rows[i][j] === null) {
        emptySqr ++;
      }
    }
  }

  if (emptySqr) {
    // when there's neither incorrect grid nor grey ones
    return "You did it!!";
  } else { 
    // when there's no incorrect grid but there's still grids at empty state
    return "So far so good"; 
  }
}