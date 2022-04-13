import React from "react";
import { Square } from './Square';

export class Board extends React.Component {

  renderSquare(i) {
      return (
          <Square
            // canToggle={}
            // col={}
            // currentState={}
            // onClick={() => this.props.onClick(i)}
            // row={}
          />
        );
  }
  
  render() {
    return (
      <div>
        {console.log(this.props.squares)}
        {          
          this.props.squares
          .map( (row, i) => 
            (<div className="board-row" key={"row" + i}>
              {
                // console.log(row)
                row.map((col, j) => 
                  <Square key={"col" + j} />                  
                )
              }                        
            </div>)
          )
        }
      </div>
    );
  }
}