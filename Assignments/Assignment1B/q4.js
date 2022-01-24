//-------Q4-------
(function() {
    console.log("Question 4:");

    // create a function to check if one positive integer is a prime number. ref: https://www.geeksforgeeks.org/prime-numbers/    
    function isPrime(num, i) {                

        // corner case
        if (num === 1) {
            return false;
        }

        // base case
        if (typeof(i) == "undefined") {
            // start from 2, the first prime number
            var i = 2;
        }

        if (num === i) {    
            // when the iteration reaches the scenario where the division happens between the number and itself,
            // the number is considered as a prime number
            return true;
        }

        // check if it's divisible by 2 or a bigger integer
        if (num % i === 0) {            
            return false;
        }
                
        // call the method recursively to test the division with a bigger number until it returns a result.
        i++;
        return isPrime(num, i);
    }

    // generate 2 arrays of 10 random numbers among the range of 1 to 200
    const tenNums = [];
    const tenNums2 = [];
    for (let i = 0; i < 10; i++) {
        tenNums[i] = Math.floor(Math.random() * 200) + 1;
        tenNums2[i] = Math.floor(Math.random() * 200) + 1;        
    }    

    // create a method to go through an array and return a string of the results
    function showIfPrime(arr) {
        let result = "";
        let output = "";

        for (let i = 0; i < arr.length; i++) {
            
            if (isPrime(arr[i])) {
                result = "yes";
            } else {
                result = "no";
            }

            if (i !== arr.length - 1) {
                output += arr[i] + "-" + result + ", ";
            } else {
                output += arr[i] + "-" + result;
            }         
        }

        return output;
    }

    console.log("Random array 1: [" + tenNums + "]");
    console.log("Results: " + showIfPrime(tenNums));
    console.log("Random array 2: [" + tenNums2 + "]");
    console.log("Results: " + showIfPrime(tenNums2));
    
})();