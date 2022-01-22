// -------Q1-------
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

//-------Q2-------
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
            
            // otherwise confirm where the streak starts and how long it is
            let start = arr[diff.indexOf(1)];
            let len = 2;

            // create a 2d array to store the streaks
            const streaks = [];

            // start from the element after the first 1
            for (let i = diff.indexOf(1)+1; i < diff.length; i++) {
                // the current streak breaks or there's no new streak found at this index
                if (diff[i] !== 1) {
                    // if the current streak breaks, add the streak parameters into the 2d array
                    if (start != null) {
                        streaks.push([start, len]);
                    }

                    // and then reset the parameters
                    start = null;
                    len = 1;

                } else {
                    // if there's a streak at this index, increment the streak length
                    len++;

                    // if it's a new streak, update the start value
                    if (start == null) {
                        start = arr[i]
                    }
                }                        
            }

            // reset the 2 parameter values based on the first array of 2d array streaks
            start = streaks[0][0];
            len = streaks[0][1];

            // loop through the 2d array to find the longest streak
            for (let i = 0; i < streaks.length; i++) {
                
                if (streaks[i][1] > len) {
                    // if a longer streak is found, update the 2 parameter values
                    len = streaks[i][1];
                    start = streaks[i][0];
                    
                } else if (streaks[i][1] === len) {
                    // if there's another streak with the same length, compare the start values
                    if (streaks[i][0] > start) {
                        // update the start value with a larger one
                        start = streaks[i][0];
                    }
                }              
            }

            //using the 2 parameter values to calculate the sum
            return (start + start + len - 1) * len / 2;
        }     
    }

    const arr1 = [1, 2, 3, 6, 9, 34, 2, 6] 
    console.log("The sum of the longest streak in [" + arr1 + "] is " + sumOfStreak(arr1));

    const arr2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
    console.log("The sum of the longest streak in [" + arr2 + "] is " + sumOfStreak(arr2));

    const arr3 = [100, 101, 102, 3, 4, 5, 6, 9];
    console.log("The sum of the longest streak in [" + arr3 + "] is " + sumOfStreak(arr3));

    const arr4 = [9, 8, 7, 4, 4];
    console.log("The sum of the longest streak in [" + arr4 + "] is " + sumOfStreak(arr4));

})();

//-------Q3-------
(function(){
    console.log("Question 3:");

    const bDate = new Date(2022, 8, 1, 0, 0, 0);
    const now = new Date();

    console.log(bDate);
    console.log(now);

    // the time left in milliseconds
    let msToBd = bDate.getTime() - now.getTime();
    console.log(msToBd);

    // the time left in seconds
    let secToBd = Math.round(msToBd / 1000);
    console.log(secToBd);

    // the time left in minutes
    let minToBd = Math.floor(secToBd / 60);
    // record the remained seconds
    secToBd = secToBd % 60
    console.log(minToBd);
    console.log(secToBd);

    // the time left in hours
    let hrsToBd = Math.floor(minToBd / 60);
    // record the remained minutes
    minToBd %= 60;
    console.log(hrsToBd);
    console.log(minToBd);

    // the time left in days
    let daysToBd = Math.floor(hrsToBd / 24);
    // record the remained hours
    hrsToBd %= 24;
    console.log(daysToBd);
    console.log(hrsToBd);
    
    // the time left in weeks
    let wksToBd = Math.floor(daysToBd / 7);
    // record the remained days
    daysToBd %= 7;
    console.log(wksToBd);
    console.log(daysToBd);
    
    console.log("There are " + wksToBd + " weeks, " + daysToBd + " days, " + hrsToBd + " hours, "
     + minToBd + " minutes, and " + secToBd + " seconds until my next birthday!");

})();
/*
Question 3
Write a JavaScript program to calculate the number of weeks, days, hours, minutes and seconds left until midnight
 on your birthday.
•	The script does not have to prompt for your birthdate. Simply assign it to a variable and start from there.
o	Ex: var myNextBirthday = …your code here
•	Expected sample output (console.log()):
o	There are 35 weeks, 3 days, 13 hours, 25 minutes, and 12 seconds until my next birthday!
*/