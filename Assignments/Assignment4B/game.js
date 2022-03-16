(() => {

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
                
                if (json.rows[i][j].canToggle) {
                    puzzleGrid.id = "notFixed";                    
                } else {
                    puzzleGrid.id = "fixed";
                }

                puzzleGrid.className = "state" + json.rows[i][j].currentState;

                puzzleRow.appendChild(puzzleGrid);
                //document.querySelector("#row" + i).appendChild(puzzleGrid);
            }
        }

        let newParag = document.createElement("p");
        document.querySelector("#theGame").appendChild(newParag);
        
        let checkButton = document.createElement("button");
        checkButton.type = "button";
        checkButton.id = "checkBtn";
        checkButton.textContent = "Check";

        let statusSpan = document.createElement("span");
        statusSpan.id = "showStatus";
        statusSpan.textContent = "test";

        newParag.appendChild(checkButton);
        newParag.appendChild(statusSpan);

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