(function() {

    var x = parseInt("hello");

    if (isNaN(x)) {
        console.log("That was true");
    } else {
        console.log("That was false");
    }

    var y = [];

    if (y === []) {
        console.log("That was true");
    } else {
        console.log("That was false");
    }
    
})();