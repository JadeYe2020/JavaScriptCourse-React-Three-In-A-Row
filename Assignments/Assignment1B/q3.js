//-------Q3-------
(function(){
    console.log("Question 3:");

    const bDay = new Date(2022, 8, 1, 0, 0, 0);
    const now = new Date();

    console.log("Next birthday: " + bDay);
    console.log("Now: " + now);

    // the time left in milliseconds
    let msToBd = bDay.getTime() - now.getTime();
    // the time left in seconds
    let secToBd = Math.round(msToBd / 1000);

    // the time left in minutes
    let minToBd = Math.floor(secToBd / 60);
    // record the remained seconds
    secToBd = secToBd % 60

    // the time left in hours
    let hrsToBd = Math.floor(minToBd / 60);
    // record the remained minutes
    minToBd %= 60;

    // the time left in days
    let daysToBd = Math.floor(hrsToBd / 24);
    // record the remained hours
    hrsToBd %= 24;
    
    // the time left in weeks
    let wksToBd = Math.floor(daysToBd / 7);
    // record the remained days
    daysToBd %= 7;
    
    console.log("There are " + wksToBd + " weeks, " + daysToBd + " days, " + hrsToBd + " hours, "
     + minToBd + " minutes, and " + secToBd + " seconds until my next birthday!");

})();