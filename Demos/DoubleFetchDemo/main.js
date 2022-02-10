(() => {
    
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // do other stuff with the data from the first api call

        // METHOD 2: Promise Chaining - Chain Fetch
        return fetch('https://jsonplaceholder.typicode.com/todos');
    })
    .then(response2 => response2.json())
    .then(data2 => {
        console.log(data2);
        
    });
    
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // do other stuff with the data from the first api call

    //     // METHOD 1: Nested Fetch
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response2 => response2.json())
    //     .then(data2 => {
    //         console.log(data2);
    //     });
    // });

})()