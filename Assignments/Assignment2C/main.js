(() => {
    
    const deckAPIurl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    const numCards = 5;    
    
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
        // an array to store the cards' values
        const myCards = [];

        var htmlOutput = "";

        // go through the cards to get the images and store the card value
        data2.cards.forEach(card => {
            // populate the array with subarrays of card value and suit
            myCards.push(card.code.split(''));                

            htmlOutput += "<img src='" + card.image + "'/>";                
        });

        document.querySelector("#cards").innerHTML = htmlOutput;

        
    });

})()