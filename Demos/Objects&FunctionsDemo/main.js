// IIFE
(function(){
    // all code here - safe from Global context

    // function myFunction()
    // {
    //     console.log("Hello from myFunction!");
    // }

    // myFunction.language = "English";
    // myFunction.subFunction = function() { console.log("Hello from subFunction!"); }

    // myFunction();
    // console.log(myFunction.language);
    // myFunction.subFunction();

    // // define a blueprint for my object - no classes in JS yet
    // var peopleCreator = function(name, age) {
    //     this.name = name;
    //     this.age = age;
    // };

    // // create objects from the blueprint
    // var joe = new peopleCreator("Joe", 34);
    // var jane = new peopleCreator("Jane", 22);

    // joe.hasSillyShoes = false;
    // jane.sayHello = function() { console.log("Hello from " + jane.name) };
    // jane.sayHello();

    // // Object Literal Notation
    var me = {
        name: "Jade",
        age: 33,
        isRetired: false,
        favShows: ["Derry Girls", "Fleabag"],
        address: {
            street: "2 King Street",
            City: "Hfx"
        },
        favColor: "green",
        sayHi: function() {console.log("Hi! This is " + me.name);}
    };

    console.log(me);

    var meAsJSON = JSON.stringify(me);
    console.log(meAsJSON);

    // Pretending we are other side
    var newMe = JSON.parse(meAsJSON);
    console.log(newMe);

    // // dot notation
    // me.sayHi();

    // // Computed Member Access Operator
    // me["sayHi"]();
    
    // // create an empty object
    // // var me = {};
    // // var me = new Object();
    // var me = Object.create(null);

    // // add new properties dynamicly
    // me.hasSillyShoes = true;
    // me.newFunction = function() {console.log("My new function")};

    // me.newFunction();

})();