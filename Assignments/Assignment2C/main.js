(() => {
    const numCards = 5;
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
    const suits = ['D', 'C', 'H', 'S'];

    const isStraight = (valuesSorted) => {
        var isStraight = true;
        var loopSize = numCards - 1;

        if (valuesSorted[0] === values.indexOf('2') && valuesSorted[numCards - 1] === values.indexOf('A') ) {
            loopSize --;
        }

        for (let i = 0; i < loopSize; i++) {
            if ((valuesSorted[i+1] - valuesSorted[i]) !== 1) {
                return false;                
            }
        }

        return isStraight;
    }

    function rankHand(hand, isStraight) {
                
        // hand = [['Q', 'H'], ['A', 'H'], ['8', 'H'], ['K', 'H'], ['4', 'H']];  // hard code flush
        // hand = [['2', 'D'], ['5', 'H'], ['A', 'C'], ['3', 'C'], ['4', 'C']];  // hard code straight A-5
        // hand = [['2', 'D'], ['5', 'H'], ['6', 'C'], ['3', 'C'], ['4', 'C']];  // hard code straight 2-6

        const valueIndexes = [];
        const numSuits = [0, 0, 0, 0];

        for (let i = 0; i < hand.length; i++) {            
            valueIndexes.push(values.indexOf(hand[i][0]));

            var suitIndex = suits.indexOf(hand[i][1]);
            numSuits[suitIndex] ++;
        }

        valueIndexes.sort((a, b) => a - b); // reference: https://www.w3schools.com/js/js_array_sort.asp

        if (numSuits.indexOf(5) !== -1) {
            if (isStraight(valueIndexes)) {
                if (valueIndexes[0] === values.indexOf('0')) {
                    console.log("A ROYAL FLUSH!");
                } else {
                    console.log("A STRAIGHT FLUSH!");
                }
            } else {
                // need to also check if it's full house or four of a kind
                console.log("A FLUSH!");
            }
        }     

        // console.log(isStraight);

        // console.log(valueIndexes);
        // console.log(numSuits);
    }
    
    // const deckAPIurl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    
    fetch(deckAPIurl)
    .then(response => response.json())
    .then(data => {
        // use the deck_id to form a new api url to get 5 cards
        // const cardsUrl = 'https://deckofcardsapi.com/api/deck/' + data.deck_id + '/draw/?count=' + numCards;

        // Royal Flush
        const cardsUrl = "http://pokerhand-tester.herokuapp.com/royalflush";
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

        // an array to store the cards' values
        const myCards = [];

        var htmlOutput = "";

        // go through the cards to get the images and store the card value
        data2.cards.forEach(card => {
            // populate the array with subarrays of card value and suit
            myCards.push(card.code.split(''));                

            htmlOutput += "<img src='" + card.image + "'/>";                
        });

        console.log(myCards);

        rankHand(myCards, isStraight);

        document.querySelector("#cards").innerHTML = htmlOutput;

        
    });

})()