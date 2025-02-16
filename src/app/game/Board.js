define(["jquery", "Card", "layout"], function($, Card, layout) {
  
  // The main deck array holds all card objects.
  var deck = [];
  // The deckOrder Map holds the ordering: key is the position (0, 1, 2, …) and value is the index into the deck.
  var deckOrder = new Map();

  return {
    // Public references
    deck: deck,
    deckOrder: deckOrder,
    players: [],

    /**
     * Initializes the board with the given number of players and decks.
     * @param {number} numPlayers - How many players are in the game.
     * @param {number} numDecks - How many decks to use (1, 2, 3, ...).
     * @param {boolean} includeJokers - Whether to include jokers (adds 2 cards per deck).
     */
    init: function(numPlayers, numDecks, includeJokers) {
      // Reset deck and deckOrder.
      deck.length = 0;
      deckOrder.clear();

      // Determine number of cards per deck.
      // Standard deck has 52 cards; if including jokers, add 2 extra cards.
      var cardsPerDeck = 52;
      if (includeJokers) {
        cardsPerDeck += 2;
      }

      // Build the multi-deck.
      for (var d = 0; d < numDecks; d++) {
        for (var i = 0; i < cardsPerDeck; i++) {
          // We create a unique ID for each card by combining deck number and card index.
          // You might want to enhance the Card constructor to accept deck info.
          deck.push(new Card(d * cardsPerDeck + i));
        }
      }

      // Populate the deckOrder Map.
      // Initially, the order is sequential: key 0 maps to deck[0], key 1 maps to deck[1], etc.
      for (var i = 0; i < deck.length; i++) {
        deckOrder.set(i, i);
      }

      // Set up the players.
      this.players = [];
      for (var i = 0; i < numPlayers; i++) {
        this.players.push({
          id: i,
          hand: [],
          row: {
            cards: [],
            addCard: function(card) {
              this.cards.push(card);
            },
            adjustPos: function() {
              // Position or animate these cards in the UI as needed.
            }
          }
        });
      }

      // Link each card back to this board (e.g., for UI purposes).
      var self = this;
      deck.forEach(function(card) {
        card.parent = self;
        // If your Card object supports a UI, you might disable selection:
        // card.display.setSelectable(false);
      });
    },

    /**
     * Shuffles the deckOrder Map using a Fisher–Yates algorithm.
     * Instead of an array swap, we swap the values for two keys.
     */
    shuffleDeck: function() {
      var keys = Array.from(deckOrder.keys());
      for (var i = 0; i < keys.length; i++) {
        // Pick a random index between i and the end of the keys array.
        var randomIndex = Math.floor(Math.random() * (keys.length - i)) + i;
        var keyI = keys[i],
            keyR = keys[randomIndex];
        // Swap the values in deckOrder for keys[i] and keys[randomIndex].
        var temp = deckOrder.get(keyI);
        deckOrder.set(keyI, deckOrder.get(keyR));
        deckOrder.set(keyR, temp);
      }
    },

    /**
     * Distributes the cards to players using the order defined in deckOrder.
     * Each card is taken according to the shuffled order.
     */
    distribute: function() {
      var cardIndex = 0;
      var numPlayers = this.players.length;
      while (cardIndex < deck.length) {
        var player = this.players[cardIndex % numPlayers];
        var actualCardIndex = deckOrder.get(cardIndex);
        player.hand.push(deck[actualCardIndex]);
        // Optionally update the player's UI row.
        player.row.addCard(deck[actualCardIndex]);
        player.row.adjustPos();
        cardIndex++;
      }
    },

    /**
     * Returns a sample position for a card (could be used for animations/UI).
     * Adjust as needed for your 2D or 3D layout.
     */
    getPosFor: function(index) {
      return {
        x: (deck.length - index) / 4,
        y: (deck.length - index) / 4,
        z: -index,
        rotateY: 180
      };
    },

    /**
     * Sends each player's hand to the backend.
     * Data includes each player's ID and a list of their cards (suit and rank).
     */
    sendHandsToBackend: function() {
      var distributionData = this.players.map(function(player) {
        return {
          playerId: player.id,
          cards: player.hand.map(function(card) {
            return { suit: card.suit, rank: card.rank };
          })
        };
      });

      return $.ajax({
        url: "/api/save-hands",
        method: "POST",
        data: JSON.stringify({ distribution: distributionData }),
        contentType: "application/json"
      });
    },

    /**
     * Scores the current trick by comparing cards.
     * The current logic picks the card with the highest rank (provided it has the same suit as the first card).
     * Modify this to fit your game rules.
     * @param {Array} cardsOnTable - The cards that have been played on the table.
     * @returns {number} - The index of the winning card.
     */
    scoreCurrentTrick: function(cardsOnTable) {
      var maxIndex = 0;
      for (var i = 1; i < cardsOnTable.length; i++) {
        if (
          cardsOnTable[i].suit === cardsOnTable[maxIndex].suit &&
          cardsOnTable[i].rank > cardsOnTable[maxIndex].rank
        ) {
          maxIndex = i;
        }
      }
      return maxIndex;
    }
  };
});