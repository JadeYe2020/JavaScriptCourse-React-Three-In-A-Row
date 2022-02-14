(() => {
    
    function rankHand(hand) {
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['D', 'C', 'H', 'S'];
        
        hand = [['Q', 'H'], ['A', 'H'], ['8', 'H'], ['K', 'H'], ['4', 'H']];
        const valueIndexes = [];

        for (let i = 0; i < hand.length; i++) {            
            valueIndexes.push(values.indexOf(hand[i][0]));
        }

        valueIndexes.sort((a, b) => a - b); // reference: https://www.w3schools.com/js/js_array_sort.asp
        console.log(valueIndexes);
    }
    
    const deckAPIurl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    const numCards = 5;    
    
    fetch(deckAPIurl)
    .then(response => response.json())
    .then(data => {
        // use the deck_id to form a new api url to get 5 cards
        // const cardsUrl = 'https://deckofcardsapi.com/api/deck/' + data.deck_id + '/draw/?count=' + numCards;

        // Royal Flush
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/royalflush";
        // Straight Flush
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/straightflush";
        // Four of a kind
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/fourofakind";
        // Full House
        // const cardsUrl = "http://pokerhand-tester.herokuapp.com/fullhouse";
        // Flush
        const cardsUrl = "http://pokerhand-tester.herokuapp.com/flush";
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

        rankHand(myCards);

        document.querySelector("#cards").innerHTML = htmlOutput;

        
    });

})()