import React from "react";
import axios from 'axios';
import { Board } from './Board';
import { Square } from "./Square";

export class SampleGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
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

      // return a 2d array of boolean value
      return rows.map((row) => 
          [
            row.map((square) => 
              [square.correctState === square.currentState]
            )
          ]        
        );
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
                correctSqr={ this.correctSquare() }
              />
            </div>
          </div>
          <div id="checkbox">
            <label htmlFor="showWrong">Show incorrect squares </label>
            <input id="showWrong" type="checkbox"></input>
          </div>
          <div id="button">
            <button id="checkBtn">Check</button>
          </div>
        </div>
      );
    }

}