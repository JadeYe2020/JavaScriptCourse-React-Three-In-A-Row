(() => {

    fetch("https://threeinarowpuzzle.herokuapp.com/sample")
    .then(response => response.json())
    .then(json => {
        let puzzleTable = document.createElement("table");
        puzzleTable.id = "theTable";
        document.querySelector("#theGame").appendChild(puzzleTable);

        //let rowCount = json.rows.length;
        

        for (let i = 0; i < json.rows.length; i++) {
            let puzzleRow = document.createElement("tr");
            puzzleRow.id = "#row" + (i+1);            
            document.querySelector("#theTable").appendChild(puzzleRow);
        }


        //console.log(rowCount);
    });

})();