// Q1
(function() {
    console.log("Question 1:");

    function cutOrFlip(str) {       
        // convert the string into a character array
        const strArr = str.split("");

        // check if the first and last characters of the string are the same letter
        if (strArr[0].toUpperCase() !== strArr[str.length - 1].toUpperCase()) {
            
            // if they are different letters, removed both of them
            strArr.pop();
            strArr.shift();

        } else {    
            // if they are the same letters, reverse the character order                       
            strArr.reverse();
        }

        // Joins all charaters into a string
        return strArr.join("");        
    }

    console.log(cutOrFlip("Triscuit"));
    console.log(cutOrFlip("Cracker"));
})();

//Q2
(function() {
    console.log("Question 2:");

    function sumOfStreak(arr) {
        // create an array to store the longest streak
        const streak = [0];

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            
        }

    }


    const arr1 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
    console.log("The longest sum of " + arr1 + " = " + sumOfStreak(arr1));

    const arr2 = [100, 101, 102, 3, 4, 5, 6, 9];
    console.log("The longest sum of " + arr2 + " = " + sumOfStreak(arr2));

})();

/*
Question 2	
Write a function in JavaScript that will return the sum of the longest streak of consecutive increasing numbers
 within an array. 
•	If there are no consecutive numbers in the array, the function will return zero.
•	If there are multiple instances of the same number of consecutive numbers (increasing by 1) in the array,
 the function will return the largest sum calculated between all instances.
•	Examples:
o	[1, 2, 3, 6, 9, 34, 2, 6] would return 6 (1+2+3)
o	[3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3] would return 27 (8+9+10)
o	[100, 101, 102, 3, 4, 5, 6, 9] would return 18 (3+4+5+6)

*/