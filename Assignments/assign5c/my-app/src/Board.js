import React from "react";
import { Square } from './Square';

export class Board extends React.Component {
  
  render() {
    const rows = this.props.rows;
    const currentResults = this.props.currentResults;

    return (
      <div>
        {          
          rows.map( (row, i) => 
            (<div className="board-row" key={"row" + i}>
              {
                row.map((col, j) => 
                  <Square key={"col" + j} 
                    canToggle={col.canToggle}                    
                    row={i}
                    col={j}
                    currentState={col.currentState}
                    onClick={() => this.props.onClick(i, j)}
                    isCorrect={currentResults[i][j]}
                    showWrong={this.props.showWrong}
                  />                  
                )
              }                        
            </div>)
          )
        }
      </div>
    );
  }
}