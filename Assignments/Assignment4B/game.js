(() => {

    fetch("https://threeinarowpuzzle.herokuapp.com/random")
    // fetch("https://threeinarowpuzzle.herokuapp.com/sample")
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

                        // if the checkbox is checked then it needs to check whether the grid is incorrect
                        if (checkBox.checked) {                         

                            let correctState = json.rows[i][j].correctState;
                            let currentState = json.rows[i][j].currentState;

                            if (currentState !== correctState && currentState !== 0) {
                                // mark the grid with some text
                                document.querySelector("#row" + i).childNodes[j].innerText = "!";
                            } else {
                                // reset the grid with empty string
                                document.querySelector("#row" + i).childNodes[j].innerText = "";
                            }
                        }

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
        checkButton.textContent = "Check Puzzle";        

        // add a span tag to display possible status text
        let statusSpan = document.createElement("span");
        statusSpan.id = "showStatus";
        //statusSpan.textContent = "test";

        // a function to label the wrong grid with a class named "incorrect"
        function checkGrids(size) {

            for (let i = 0; i < size; i++) {
                
                for (let j = 0; j < size; j++) {
                    let correctState = json.rows[i][j].correctState;
                    let currentState = json.rows[i][j].currentState;
                    
                    if (currentState !== correctState && currentState !== 0) {
                        // add in a new class
                        document.querySelector("#row" + i).childNodes[j].classList.add("incorrect");
                    } else {
                        // make sure the other grids don't have the class
                        document.querySelector("#row" + i).childNodes[j].classList.remove("incorrect");
                    } 
                }
            }
        }

        // set the onclick event
        checkButton.addEventListener("click", () => {
            checkGrids(gridSize);

            let result = "";

            if (document.querySelectorAll(".incorrect").length !== 0) {
                result = "Something is wrong";
            } else if (document.querySelectorAll(".state0").length !== 0) {
                result = "So far so good";
            } else {
                result = "You did it!!";
            }

            document.querySelector("#showStatus").innerText = result;

        }, false);


        newParag.appendChild(checkButton);
        newParag.appendChild(statusSpan);

        // create a new paragraph to put in the checkbox
        let newParag2 = document.createElement("p");
        document.querySelector("#theGame").appendChild(newParag2);
        
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "showIncorrect";

        // set the checkbox change event, reference: https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
        checkBox.addEventListener("change", function() {
            if (this.checked) {
                // check the table and lable incorrect grids
                checkGrids(gridSize);

                // add innerText to all incorrect grids
                document.querySelectorAll(".incorrect").forEach(grid => {
                    grid.innerText = "!";                    
                });
            }
            else {
                // reset all grids' innerText to empty string
                document.querySelectorAll("td").forEach(grid => {
                    grid.innerText = "";
                });
            }
        });

        let cbLabel = document.createElement("label");
        cbLabel.setAttribute("for", checkBox.id);
        cbLabel.textContent = "Show incorrect squares";
        newParag2.appendChild(checkBox);
        newParag2.appendChild(cbLabel);
    });

})();