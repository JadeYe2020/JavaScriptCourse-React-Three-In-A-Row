import React from "react";
import { Square } from './Square';

export class Board extends React.Component {

  // renderSquare(i) {
  //     return (
  //         <Square
  //           canToggle={this.props[i].canToggle}
  //           col={i}
  //           currentState={}
  //           onClick={() => this.props.onClick(i)}
  //           row={}
  //         />
  //       );
  // }
  
  render() {
    const rows = this.props.rows;

    return (
      <div>
        {          
          rows.map( (row, i) => 
            (<div className="board-row" key={"row" + i}>
              {
                row.map((col, j) => 
                  <Square key={"col" + j} 
                    canToggle={row[j].canToggle}
                    col={j}
                    currentState={row[j].currentState}
                    row={i}
                    onClick={() => this.props.onClick(i, j)}
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