import React from "react";
import axios from 'axios';
import { Board } from './Board';

export class SampleGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
        };
    }       

    componentDidMount() {
        axios.get('https://threeinarowpuzzle.herokuapp.com/sample')
            .then(res => {
                const rows = res.data.rows;
                // console.log(rows);
                this.setState({ rows });
            })
    }

    handleClick(i) {

    }

    render() {
        return (
          <div>
            <h2>Sample Game</h2>
            <button>Reload</button>
            <div className="game">
              <div className="game-board">
                <Board 
                  squares={this.state.rows}
                  onClick={(i) => this.handleClick(i)}
                />
              </div>
            </div>

          </div>
        );
    }

}