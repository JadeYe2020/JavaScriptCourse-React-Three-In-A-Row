//immediately-invoked function expression (IIFE)
(function() { //anonymous function
    var mVar = 3;

    function alert(message) {
        console.log(message);
    }

    alert("not a pop-up: " + mVar);
})(); //end of IIFE