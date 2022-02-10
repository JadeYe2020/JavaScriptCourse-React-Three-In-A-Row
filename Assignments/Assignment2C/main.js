(() => {
    const deckAPIurl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';    
    
    function getCards(deck, numCards) {        
        const cardsUrl = 'https://deckofcardsapi.com/api/deck/' + deck.deck_id + '/draw/?count=' + numCards;

        return cardsUrl;
    }

    fetch(deckAPIurl)
    .then(response => response.json())
    .then(data => {
        var cardsUrl = getCards(data, 5);

        fetch(cardsUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    });
    
    // var myDeck = {};

    

    // myDeck = fetch(deckAPIurl)
    // .then(response => response.json())
    // .then(data => data)
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
    
    // console.log(myDeck);
})()