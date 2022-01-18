// Immediately-invoked Function Expression (IIFE)
(function(){

    // put code here - safe from Global context
    var myMovie = {
        "name": "Bad Boys",
        "actors": [
            "Martin L",
            "Will Smith"
        ], 
        "ratings": "PG-13",
        "yearOfRelease": 1999,
        "availableToStream": true,
        "studio": {
            "name": "Paramount",
            "location": "Hollywood"
        },
        "rent": function() {
            return "Rented for $9.99";
        }
    };
        
    console.log(myMovie);
    console.log(myMovie.rent());

    num = 6;
    console.log(num);
    var num;

})();