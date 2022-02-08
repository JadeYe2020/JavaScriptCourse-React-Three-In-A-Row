(() => {

    const x = 3;

    if (x === 3) {
        // var y = 4; // var is NOT block scoped
        let y = 4; // let IS block scoped
        y += x;
    }

    // console.log("y is " + y);

    var myFirstName = "Jade";
    console.log("Hello, " + myFirstName + "!");

    const myFunction = () => { // const won't allow the function to be re-defined
        // var myFirstName = "whoever"; // var IS function scoped
        const myFirstName = "whoever";
        console.log("Hello, " + myFirstName + "!");
    };

    myFunction();

    // var myTargetDiv = document.querySelector("#myOutput");
    // var timerDelay = 3000;

    // // setTimeout(() => {console.log("Hello, from callback")}, 3000);

    

    // // function (msg, erroCode) {return "blah";}
    // // // OR in this syntax
    // // (msg, erroCode) => "blah";


    // // CANNOT call function before it is defined?

    // var sayHello = () => {
    //     // console.log("Hello, from function expression!");
    //     myTargetDiv.innerHTML = "Hello, from callback";
    // }

    // setTimeout(sayHello, timerDelay);    
})()