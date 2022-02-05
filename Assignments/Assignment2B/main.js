(function() {

    // fetch data from API
    fetch("https://imdb-api.com/en/API/InTheaters/k_t74rh7ze")
    .then(response => response.json())
    .then(data => {
        var output = "<tr><th>Name</th><th>Directed by</th><th>Genre</th><th>Stars</th></tr>";
        
        data.items.forEach(function(item) {
            output += "<tr>";
            output += "<td><em>" + item.title + "</em><br/><img src=" + item.image + "></td>";
            output += "<td>" + item.directors + "</td>";
            output += "<td><ul>";

            item.genreList.forEach(genre => {
                output += "<li>" + genre.value + "</li>";
            });

            output += "</ul></td>";
            output += "<td>" + item.stars + "</td>";
            output += "</tr>";
        });


        document.querySelector("#list").innerHTML = output;
    });

})();