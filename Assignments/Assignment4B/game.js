(() => {

    fetch("https://threeinarowpuzzle.herokuapp.com/random")
    // fetch("https://threeinarowpuzzle.herokuapp.com/sample")
    .then(response => response.json())
    .then(json => {
        // create a table node
        let puzzleTable = document.createElement("table");
        puzzleTable.id = "theTable";
        // append the node to the div
        document.querySelector("#theGame").appendChild(puzzleTable);

        // create and append a tbody node
        let tableBody = document.createElement("tbody");
        puzzleTable.appendChild(tableBody);
        
        // create and append the first table row as the row to display clues
        let clueRow = document.createElement("tr");
        clueRow.id = "clue";
        tableBody.appendChild(clueRow);

        // create and append the td nodes that will show the clues for columns
        let gridSize = json.rows.length;

        for (let i = 0; i < gridSize; i++) {
            let columnClue = document.createElement("td");
            columnClue.id = "clueCol" + i;
            columnClue.className = "clue";
            clueRow.appendChild(columnClue);
        }
        // the last td will only take the space
        let emptyCell = document.createElement("td");
        emptyCell.className = "clue";
        clueRow.appendChild(emptyCell);
        
        // create and append the other rows which will form the game area
        for (let i = 0; i < gridSize; i++) {
            // first, create and append a tr node
            let puzzleRow = document.createElement("tr");
            puzzleRow.id = "row" + i;            
            tableBody.appendChild(puzzleRow);

            // second, create and append the td nodes of that row
            for (let j = 0; j < gridSize; j++) {

                let puzzleGrid = document.createElement("td");
                
                if (json.rows[i][j].canToggle) {
                    // set the id of the td nodes based on the value of canToggle
                    puzzleGrid.id = "notFixed";

                    // add a click event listener to all the canToggle grids
                    puzzleGrid.addEventListener("click", () => {
                        // the click action will alternate the current state
                        if (json.rows[i][j].currentState === 2) {
                            // change the value from state 2 to state 0
                            json.rows[i][j].currentState = 0;
                        } else {
                            // from state 0 to 1 or from state 1 to 2
                            json.rows[i][j].currentState ++;
                        }

                        // update the class based on the current state value
                        puzzleGrid.className = "state" + json.rows[i][j].currentState;

                        // call a function update the clues
                        displayClues(gridSize);

                        // if the checkbox is checked then it needs to check whether the state is incorrect
                        // and set the text accordingly
                        if (checkBox.checked) {
                            let correctState = json.rows[i][j].correctState;
                            let currentState = json.rows[i][j].currentState;

                            if (currentState !== correctState && currentState !== 0) {
                                // mark the grid with an exclamation mark
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

                // name the class based on the current state value for all td nodes
                puzzleGrid.className = "state" + json.rows[i][j].currentState;

                puzzleRow.appendChild(puzzleGrid);
            }

            // add one last grid to each row to display clues
            let rowClue = document.createElement("td");
            rowClue.id = "clueRow" + i;
            rowClue.className = "clue";
            puzzleRow.appendChild(rowClue);
        }

        // create and append a new paragraph to put in the check button
        let newParag = document.createElement("p");
        document.querySelector("#theGame").appendChild(newParag);
        
        let checkButton = document.createElement("button");
        checkButton.type = "button";
        checkButton.id = "checkBtn";
        checkButton.textContent = "Check Puzzle";        

        // add a span tag to display some possible status text
        let statusSpan = document.createElement("span");
        statusSpan.id = "showStatus";

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

        // set the onclick event listener for the button
        checkButton.addEventListener("click", () => {
            // label all the incorrect grids
            checkGrids(gridSize);

            let result = "";

            if (document.querySelectorAll(".incorrect").length !== 0) {
                // when there's 1 or more incorrect grid
                result = "Something is wrong";
            } else if (document.querySelectorAll(".state0").length !== 0) {
                // when there's no incorrect grid but there's still grids at empty state
                result = "So far so good";
            } else {
                // when there's neither incorrect grid nor grey ones
                result = "You did it!!";
            }

            // display the span text accordingly
            document.querySelector("#showStatus").innerText = result;

        }, false);


        // append the button and the span section subsequently
        newParag.appendChild(checkButton);
        newParag.appendChild(statusSpan);

        // create a new paragraph to put in the checkbox
        let newParag2 = document.createElement("p");
        document.querySelector("#theGame").appendChild(newParag2);
        
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "showIncorrect";

        // set the checkbox change event. Reference: https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
        checkBox.addEventListener("change", function() {
            // when the checkbox is changed from unchecked to checked
            if (this.checked) {
                // lable all incorrect grids
                checkGrids(gridSize);

                // add innerText to all incorrect grids
                document.querySelectorAll(".incorrect").forEach(grid => {
                    grid.innerText = "!";                    
                });
            }
            else { // when it's changed from checked to unchecked
                // reset all grids' innerText to empty string, except for the grids for clues
                document.querySelectorAll("td").forEach(grid => {
                    if (!grid.id.includes("clue"))
                        grid.innerText = "";
                });
            }
        });
        // create a label node for the checkbox
        let cbLabel = document.createElement("label");
        cbLabel.setAttribute("for", checkBox.id);
        cbLabel.textContent = "Show incorrect squares";
        // append the nodes in correct order
        newParag2.appendChild(checkBox);
        newParag2.appendChild(cbLabel);

        // the function to update all clues
        function displayClues(size) {
            for (let i = 0; i < size; i++) {
                let rowState1Count = document.querySelector("#row" + i).querySelectorAll(".state1").length;
                let rowState2Count = document.querySelector("#row" + i).querySelectorAll(".state2").length;

                document.querySelector("#clueRow" + i).innerText = rowState1Count + "/" + rowState2Count;

                let colState1Count = 0;
                let colState2Count = 0;

                for (let j = 0; j < size; j++) {
                    let gridNode = document.querySelector("#row" + j).childNodes[i];

                    if (gridNode.classList.contains("state1")) {
                        colState1Count ++;
                    } else if (gridNode.classList.contains("state2")) {
                        colState2Count ++;
                    }                    
                }

                document.querySelector("#clueCol" + i).innerText = colState1Count + "/" + colState2Count;
            }
        }

        // show the clues when the page loads
        displayClues(gridSize);
    });

})();