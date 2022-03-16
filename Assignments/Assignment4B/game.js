(() => {

    // fetch("https://threeinarowpuzzle.herokuapp.com/random")
    fetch("https://threeinarowpuzzle.herokuapp.com/sample")
    .then(response => response.json())
    .then(json => {
        let puzzleTable = document.createElement("table");
        puzzleTable.id = "theTable";
        document.querySelector("#theGame").appendChild(puzzleTable);

        let tableBody = document.createElement("tbody");
        puzzleTable.appendChild(tableBody);

        let gridSize = json.rows.length;        

        for (let i = 0; i < gridSize; i++) {
            let puzzleRow = document.createElement("tr");
            puzzleRow.id = "row" + i;            
            tableBody.appendChild(puzzleRow);

            for (let j = 0; j < gridSize; j++) {
                let puzzleGrid = document.createElement("td");
                //let gridState = json.rows[i][j].currentState;
                
                if (json.rows[i][j].canToggle) {
                    puzzleGrid.id = "notFixed";
                    puzzleGrid.addEventListener("click", () => {
                        if (json.rows[i][j].currentState === 2) {
                            json.rows[i][j].currentState = 0;
                        } else {
                            json.rows[i][j].currentState ++;
                        }

                        puzzleGrid.className = "state" + json.rows[i][j].currentState;

                    }, false);                    
                } else {
                    puzzleGrid.id = "fixed";
                }

                puzzleGrid.className = "state" + json.rows[i][j].currentState;

                puzzleRow.appendChild(puzzleGrid);
                //document.querySelector("#row" + i).appendChild(puzzleGrid);
            }
        }

        // create a new paragraph to put in the check button
        let newParag = document.createElement("p");
        document.querySelector("#theGame").appendChild(newParag);
        
        let checkButton = document.createElement("button");
        checkButton.type = "button";
        checkButton.id = "checkBtn";
        checkButton.textContent = "Check";        

        // add a span tag to display possible status text
        let statusSpan = document.createElement("span");
        statusSpan.id = "showStatus";
        statusSpan.textContent = "test";

        // set the onclick event
        checkButton.addEventListener("click", () => {

            let result = "";
            let correctCount = 0;

            for (let i = 0; i < gridSize; i++) {
                
                for (let j = 0; j < gridSize; j++) {
                    let correctState = json.rows[i][j].correctState;
                    let currentState = json.rows[i][j].currentState;
                    
                    if (currentState !== correctState && currentState !== 0) {
                        result = "Something is wrong";
                        break;
                    } else if (currentState === correctState) {
                        correctCount ++;
                    }

                    //grid = document.querySelector("#row" + i).childNodes[j];

                    //console.log(grid.id);
                }

                if (result) {
                    break;
                }
            }

            if (!result) {
                if (correctCount !== gridSize * gridSize) {
                    result = "So far so good";
                } else {
                    result = "You did it!!";
                }                
            }            

            document.querySelector("#showStatus").textContent = result;
        }, false);


        newParag.appendChild(checkButton);
        newParag.appendChild(statusSpan);

        // create a new paragraph to put in the checkbox
        let newParag2 = document.createElement("p");
        document.querySelector("#theGame").appendChild(newParag2);
        
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "showIncorrect";

        let cbLabel = document.createElement("label");
        cbLabel.setAttribute("for", checkBox.id);
        cbLabel.textContent = "Show incorrect squares";
        newParag2.appendChild(checkBox);
        newParag2.appendChild(cbLabel);
        




        //console.log(rowCount);
    });

})();