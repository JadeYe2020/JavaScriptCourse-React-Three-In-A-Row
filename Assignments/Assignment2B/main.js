(function() {

    // fetch data from API
    fetch("https://imdb-api.com/en/API/InTheaters/k_t74rh7ze")
    .then(response => response.json())
    .then(data => {
        // start the html output with a row of table head
        var output = "<tr><th>Name</th><th>Directed by</th><th>Genre</th><th>Stars</th></tr>";
        
        // populate the rows with the data of each item
        data.items.forEach(function(item) {
            output += "<tr>";
            output += "<td><em>" + item.title + "</em><br/><img src=" + item.image + "></td>";
            output += "<td>" + item.directors + "</td>";
            output += "<td><ul>";

            item.genreList.forEach(genre => {
                output += "<li>" + genre.value + "</li>";
            });

            output += "</ul></td>";
            output += "<td>";

            item.starList.forEach(star => {
                output += star.name + "<br/>";
            });

            output += "</td></tr>";
        });

        document.querySelector("#list").innerHTML = output;
    });

})();