(() => { //IIFE
    // basic constant values
    const numCards = 5;
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
    const suits = ['D', 'C', 'H', 'S'];

    // create a function to return a boolean result of whether a sorted array of card values form a straight
    const isStraight = (valuesSorted) => {
        var isStraight = true;
        var loopSize = numCards - 1;

        if (valuesSorted[0] === values.indexOf('2') && valuesSorted[numCards - 1] === values.indexOf('A') ) {
            // if the lowest value is 2 while the highest is Ace, then only check the first 4 cards
            loopSize --;
        }

        for (let i = 0; i < loopSize; i++) {
            if ((valuesSorted[i+1] - valuesSorted[i]) !== 1) {
                // any not consecutive values, returns false
                return false;                
            }
        }
        // if the loop finish without returning false, then the result should be true (default)
        return isStraight;
    }

    function rankHand(hand, isStraight) { // pass in the new function

        const valueIndexes = []; // store the cards' values in the format of indexes
        const numValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // to store the number of each value the hand has
        const numSuits = [0, 0, 0, 0]; // to store the number of each suit the hand has

        // loop through the hand and populate the arrays above
        for (let i = 0; i < hand.length; i++) {
            var valIndex = values.indexOf(hand[i][0]);
            numValues[valIndex] ++; // increment the number of that specific value, stored in an array

            valueIndexes.push(valIndex); // store the index number into another array

            var suitIndex = suits.indexOf(hand[i][1]);
            numSuits[suitIndex] ++; // increment the number of that specific suit, stored in an array
        }

        // sort the 5 values from the lowest to the highest. reference: https://www.w3schools.com/js/js_array_sort.asp
        valueIndexes.sort((a, b) => a - b); 
        // sort the number of each value the hand has, from the highest to these lowest
        numValues.sort((a, b) => b - a); 

        if (numSuits.indexOf(5) === -1) { //when no flush (the hand doesn't have 5 of any suit)
            // check if there're 4 same values
            if (numValues[0] === 4) {
                return "FOUR OF A KIND!";

            } else if (numValues[0] === 3 && numValues[1] === 2) { 
                // if not, then check if there are 3 same values and the other 2 cards are a pair
                return "FULLHOUSE!";

            } else if (isStraight(valueIndexes)) {
                // if not, then check if it's a straight
                return "STRAIGHT!";

            } else if (numValues[0] === 3 && numValues[1] !== 2) {
                // if not, then check if there are 3 same values but the other 2 cards are not a pair
                return "THREE OF A KIND!";

            } else if (numValues[0] === 2 && numValues[1] === 2) {
                // if not, then check if there are 2 pairs
                return "TWO PAIR!";

            } else if (numValues[0] === 2 && numValues[1] === 1) {
                // if not, then check if there only 1 pair
                return "PAIR!";

            } else { // the remaining situation is a high card
                return "High Card!";
            }

        } else if (isStraight(valueIndexes)) { // when it's a flush and a straight at the same time
            if (valueIndexes[0] === values.indexOf('0')) {
                // check if the lowest card is 10. if so, it's a royal flush
                return "ROYAL FLUSH!";
            } else { 
                // if not, it's only a straight flush
                return "STRAIGHT FLUSH!";
            }
        } else { // if the flush is not a straight, then it's just a plain flush
            return "FLUSH!";
        }
    }
    
    const deckAPIurl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    
    fetch(deckAPIurl)
    .then(response => response.json())
    .then(data => {
        // use the deck_id to form a new api url to get 5 cards
        const cardsUrl = 'https://deckofcardsapi.com/api/deck/' + data.deck_id + '/draw/?count=' + numCards;

        // Royal Flush
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/royalflush";
        // Straight Flush
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/straightflush";
        // Four of a kind
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/fourofakind";
        // Full House
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/fullhouse";
        // Flush
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/flush";
        // Straight
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/straight";
        // Three of a kind
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/threeofakind";
        // Two Pair
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/twopair";
        // One Pair
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/onepair";
        // High Card
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/highcard";

        return fetch(cardsUrl);        
    })
    .then(response2 => response2.json())
    .then(data2 => {
        
        console.log(data2.cards);

        // an array to store the cards' codes
        const myCards = [];

        var htmlOutput = "";

        // go through the cards to get the images and store the card value
        data2.cards.forEach(card => {
            // populate the array with subarrays of card value and suit
            myCards.push(card.code.split(''));                

            htmlOutput += "<img src='" + card.image + "'/>";                
        });

        // call the new function to get the ranking result and use it to build a paragraph.
        htmlOutput += "<p>You have a " + rankHand(myCards, isStraight) + "</p>";

        document.querySelector("#cards").innerHTML = htmlOutput;        
    });

})()