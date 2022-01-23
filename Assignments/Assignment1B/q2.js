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