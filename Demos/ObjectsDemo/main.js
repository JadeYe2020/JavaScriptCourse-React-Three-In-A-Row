// IIFE
(function(){
    // all code here - safe from Global context

    // Object Literal Notation
    var me = {
        "name": "Jade",
        "age": 33,
        "isRetired": false,
        "favShows": ["Derry Girls", "Fleabag"],
        "address": {
            "street": "2 King Street",
            "City": "Hfx"
        },
        "favColor": "green",
        "sayHi": function() {console.log("Hi! This is " + me.name);}
    };

    console.log(me);

    // dot notation
    me.sayHi();

    // Computed Member Access Operator
    me["sayHi"]();
    
    // var callNewZealandForData = function() {
    //     console.log("Function done: took a very long time.");
    // };

    // setTimeout(callNewZealandForData, 5000);
    // setInterval(function() {console.log("Bazinga!")}, 8000);
    // console.log("Now, do something else.");

    // myFunction();
    // myFunction2(); - a hoisted function expression will not "work"

    // standard function definition - hositing will "work"
    // function myFunction() {
    //     console.log("Hello from myF 1.");
    // }

    // function expression
    // var myFunction2 = function() {
    //     console.log("Hello from myF 2.");
    // };

    // myFunction2();

})();