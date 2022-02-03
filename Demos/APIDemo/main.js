(function() {

    // API Method 3 - FETCH API - WINNER!

    var myFunction = function() {return "hello"};
    var myFunction2 = () => "hello"; // ES6 arrow functions

    // fetch('http://example.com/movies.json')
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(data);
            var outputHtml = "";
            outputHtml = "<ul>";

            data.forEach(function(element) {
                outputHtml += "<li>" + element.id + " - " + element.title + "</li>";
            });         
          
            document.querySelector("#myData").innerHTML = outputHtml;
        });


    // API Method 2 - DO NOT USE: jQuery (Callback hell)
    
    // $(document).ready(function(){
    //     $("#btnLoad").click(function(){
    //       $.ajax({url: "https://jsonplaceholder.typicode.com/posts", success: function(results){
            
    //         var outputHtml = "";
    //         outputHtml = "<ul>";

    //         results.forEach(function(element) {
    //             outputHtml += "<li>" + element.id + " - " + element.title + "</li>";
    //         });         
          
    //         $("#myData").html(outputHtml);

    //       }});
    //     });
    // });

    // $("#btnLoad").click(function(){

    //     $.ajax({url: "https://jsonplaceholder.typicode.com/posts", success: function(result){
            
        
    //         $("#myData").html(JSON.stringify(result));

    //     } });
       
    //   });


    // API Method 1 - DO NOT USE: AJAX: XMLHttpRequest
    
    // const xhttp = new XMLHttpRequest(); // main thread

    // xhttp.onload = function() { // main thread
    //     // document.getElementById("myData").innerHTML = this.responseText; //separate thread

    //     var myObjects = JSON.parse(this.responseText);

    //     document.querySelector("#myData").innerHTML = "<ul>";

    //     for (let i = 0; i < myObjects.length; i++) {
    //         document.querySelector("#myData").innerHTML += 
    //         "<li>" + myObjects[i].id + " - " + myObjects[i].title + "</li>";
            
    //     }

    //     document.querySelector("#myData").innerHTML += "<ul>";

    //     console.log(myObjects);
    // }

    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // main thread
    // xhttp.send(); // main thread
    
    // // more code on main thread running here and NOT blocked
    // console.log("Loading data...");


    // function myCallbackFunction() {
    //     document.write("Goodbye!!!<br/>");
    // }

    // // Say "Hello."
    // document.write("Hello.<br/>"); // main thread of execution

    // setTimeout(myCallbackFunction, 5000); // do not put brackets but only the function's name

    // // Say "Goodbye" two seconds from now.
    // setInterval (function() {
    //     document.write("Goodbye!<br/>"); // separate thread of execution
    // }, 5000);

    // setTimeout (function() {
    //     document.write("Bazinga!<br/>"); // separate thread of execution
    // }, 12000);

    // // Say "Hello again!"
    // document.write("Hello again!<br/>"); // main thread of execution

}) ();