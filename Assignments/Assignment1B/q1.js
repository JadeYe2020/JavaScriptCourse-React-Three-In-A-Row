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

    let str1 = "Triscuit";
    let str2 = "Cracker";
    let str3 = "Oreo";
    let str4 = "JavaScript";

    console.log("Before: " + str1 + " & After: " + cutOrFlip(str1));
    console.log("Before: " + str2 + " & After: " + cutOrFlip(str2));
    console.log("Before: " + str3 + " & After: " + cutOrFlip(str3));
    console.log("Before: " + str4 + " & After: " + cutOrFlip(str4));
})();