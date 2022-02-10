(() => {
    
    const deckAPIurl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';    
    
    // a function to return the api url of drawing cards from a specific deck
    function getCards(deck, numCards) {        
        return 'https://deckofcardsapi.com/api/deck/' + deck.deck_id + '/draw/?count=' + numCards;
    }

    fetch(deckAPIurl)
    .then(response => response.json())
    .then(data => {
        var cardsUrl = getCards(data, 5);

        fetch(cardsUrl)
        .then(response => response.json())
        .then(data => {
            // an array to store the cards' values
            const myCards = [];

            var htmlOutput = "";

            // go through the cards to get the images and store the card value
            data.cards.forEach(card => {
                // populate the array with subarrays of card value and suit
                myCards.push(card.code.split(''));                

                htmlOutput += "<img src='" + card.image + "'>";                
            });

            document.querySelector("#cards").innerHTML = htmlOutput;

            // console.log(myCards);
        })
    });

})()