// Q1
(function() {
    console.log("Question 1:");

    function cutOrFlip(str) {
        let newStr = "";

        // convert the string into a character array
        const strArr = str.split("");

        // check if the first and last characters of the string are the same letter
        if (strArr[0].toUpperCase() !== strArr[str.length - 1].toUpperCase()) {
            // if they are different letters, removed both of them
            strArr.pop();
            strArr.shift();

            // Joins all charaters into a string
            newStr = strArr.join("");
        
        } else {    // if they are the same letters, reverse the character order
            
            // create a new array with the same size to store the reversed characters
            const reversedArr = str.split("");
            
            // store the characters in the reversed order
            for (let i = 0; i < strArr.length; i++) {
                reversedArr[i] = strArr[strArr.length-1-i];                
            }

            // Joins all charaters into a string
            newStr = reversedArr.join("");
        }

        return newStr;
    }

    console.log(cutOrFlip("Triscuit"));
    console.log(cutOrFlip("Cracker"));

})();


/*
Question 2	
Write a function in JavaScript that will return the sum of the longest streak of consecutive increasing numbers within an array. 
•	If there are no consecutive numbers in the array, the function will return zero.
•	If there are multiple instances of the same number of consecutive numbers (increasing by 1) in the array, the function will return the largest sum calculated between all instances.
•	Examples:
o	[1, 2, 3, 6, 9, 34, 2, 6] would return 6 (1+2+3)
o	[3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3] would return 27 (8+9+10)
o	[100, 101, 102, 3, 4, 5, 6, 9] would return 18 (3+4+5+6)

*/