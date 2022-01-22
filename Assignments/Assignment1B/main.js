// Q1
(function() {
    console.log("Question 1:");

    function cutOrFlip(str) {       
        // convert the string into a character array
        const strArr = str.split("");   //ref: https://www.w3schools.com/js/js_array_methods.asp

        // check if the first and last characters of the string are the same letter
        if (strArr[0].toUpperCase() !== strArr[str.length - 1].toUpperCase()) {
            
            // if they are different letters, removed both of them
            strArr.pop();
            strArr.shift();

        } else {    
            // if they are the same letters, reverse the character order                       
            strArr.reverse();   // ref: https://www.w3schools.com/js/js_array_sort.asp
        }

        // Joins all charaters into a string
        return strArr.join("");    //ref: https://www.w3schools.com/js/js_array_methods.asp
    }

    console.log(cutOrFlip("Triscuit"));
    console.log(cutOrFlip("Cracker"));
})();

//Q2
(function() {
    console.log("Question 2:");

    function sumOfStreak(arr) {
        // create an array to store the difference between 2 consecutive numbers
        const diff = [];

        for (let i = 0; i < arr.length-1; i++) {
            diff.push(arr[i+1] - arr[i]);
        }

        // if there's no streak, return 0
        if (diff.indexOf(1) === -1) {
            return 0;
        } else {           
            
            // confirm the where the streak starts and how long it is
            let start = arr[diff.indexOf(1)];
            let len = 2;

            // create a 2d array to store the streaks
            const streaks = [];

            for (let i = diff.indexOf(1)+1; i < diff.length; i++) {
                if (diff[i] === 1) {
                    len++;
                    if (start == null) {
                        start = arr[i]
                    }
                } else {
                    
                    if (start != null) {
                        streaks.push([start, len]);
                    }

                    start = null;
                    len = 1;
                }               
            }

            console.log(streaks);
        }     
        console.log(diff);
                
    }


    const arr1 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
    sumOfStreak(arr1)
    // console.log("The longest sum of " + arr1 + " = " + sumOfStreak(arr1));

    const arr2 = [100, 101, 102, 3, 4, 5, 6, 9];
    sumOfStreak(arr2)
    // console.log("The longest sum of " + arr2 + " = " + sumOfStreak(arr2));

    const arr3 = [9, 8, 7, 6];
    sumOfStreak(arr3)
    // console.log("The longest sum of " + arr3 + " = " + sumOfStreak(arr3));

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