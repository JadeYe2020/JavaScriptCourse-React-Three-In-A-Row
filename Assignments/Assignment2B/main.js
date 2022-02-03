(function() {

    // fetch data from API
    fetch("https://imdb-api.com/en/API/InTheaters/k_t74rh7ze")
    .then(response => response.json())
    .then(data => {
        var output = "<ul>";
        
        data.items.forEach(function(item) {
            output += "<li>" + item.title + "</li>";
        });

        output += "</ul>"

        document.querySelector("#list").innerHTML = output;
    });

})();