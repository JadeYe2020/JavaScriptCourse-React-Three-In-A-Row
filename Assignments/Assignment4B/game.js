(() => {

    fetch("https://threeinarowpuzzle.herokuapp.com/sample")
    .then(response => response.json())
    .then(json => {
        let puzzleTable = document.createElement("table");
        puzzleTable.id = "theTable";
        document.querySelector("#theGame").appendChild(puzzleTable);

        let gridSize = json.rows.length;
        

        for (let i = 0; i < gridSize; i++) {
            let puzzleRow = document.createElement("tr");
            puzzleRow.id = "row" + i;            
            document.querySelector("#theTable").appendChild(puzzleRow);

            for (let j = 0; j < gridSize; j++) {
                let puzzleGrid = document.createElement("td");
                
                if (json.rows[i][j].canToggle) {
                    puzzleGrid.id = "fixed";                    
                } else {
                    puzzleGrid.id = "notFixed";
                }

                puzzleGrid.className = "state" + json.rows[i][j].currentState;

                document.querySelector("#row" + i).appendChild(puzzleGrid);
            }
        }


        //console.log(rowCount);
    });

})();