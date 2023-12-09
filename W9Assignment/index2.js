//begin with defining variables Suits and values to ensure the game
//knows which cards are higher, and therefore give the players points
const Suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
const Values = [{"A":14}, {"K":13}, {"Q":12}, {"J":11}, {"10":10},
   {"9":9}, {"8":8}, {"7":7}, {"6":6}, {"5":5}, {"4":4}, {"3":3}, {"3":3}];


//first class, Deck, helps cards be defined for players to use
//function freshDeck called later on line 45
class Deck {
   constructor (cards = freshDeck()){
      this.cards = cards;
   }

   //shows the number of cards, 52
   get numberOfCards(){
      return this.cards.length
   }

   //method to shuffle or randomize the cards for the players
   //uses a for loop and a math.floor math.random to do so
   shuffle(){
      for (let i = this.numberOfCards - 1; i>0; i--){
         const newIndex = Math.floor(Math.random() *(i+1));
         const oldValue = this.cards[newIndex];
         this.cards[newIndex] = this.cards[i];
         this.cards[i] = oldValue;
      }
   }
}

//second class, Card, is created to be used in the function freshDeck
//which gives the players a new deck of cards to play with
class Card {
   constructor(suit, value, player1Card, player2Card){
      this.suit = suit;
      this.value = value;
      this.player1Card = player1Card;
      this.player2Card = player2Card;
   }
}

// called on earlier in line 13
// flatmap = add and remove items in a map multiple times
function freshDeck() {
   return Suits.flatMap(suit => {
      return Values.map(value => {
         return new Card(suit, value);
      })
   })
}

//calls the deck to be shuffled 
const deck = new Deck();
deck.shuffle();

let player1Deck, player2Deck;
   //has two "decks" per player since they are split


//function to start the game which involves getting the new deck
// and shuffling it. then we have the midpoint of the deck 
// and split the deck in two to give one half to each player
startGame ();
function startGame() {
   const deck = new Deck();
   deck.shuffle();

// player 1 and 2 decks split evenly and ranadomly
   const deckMidpoint = Math.ceil(deck.numberOfCards/2);
   player1Deck = new Deck(deck.cards.slice(0, deckMidpoint));
   player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

   //points start at 0 at the beginning of the game
   let player1Points =0;
   let player2Points =0;

   const gameRounds = 26;

   //for loop on who wins each round while they each have cards
   for (let i=0; i< gameRounds; i++) {
      const player1Card = player1Deck.cards[i].value;
      const player2Card = player2Deck.cards[i].value;
      
      if (Object.values(player1Card)[0] > Object.values(player2Card)[0]) {
         console.log (`Player 1 wins round ${i+1}`);
         player1Points++;
      } else if (Object.values(player1Card)[0] < Object.values(player2Card)[0]) {
         console.log (`Player 2 wins round ${i+1}`);
         player2Points++;
      } else {
         console.log (`Round ${i+1} is a tie. No points.`);
      }
   }
      //logs the total end game poitns and who the winner is.
      //MUST BE INSIDE THE STARTGAME FUNCTION. Otherwise it doesn't work
         //since the variables player1Points and player2Points were
         //assigned within the function and not outside it
      console.log(`Player 1 Points: ${player1Points}`);
      console.log(`Player 2 Points: ${player2Points}`);
      if (player1Points > player2Points) {
         console.log ("Player 1 wins the Game!");
      } else if (player1Points < player2Points) {
         console.log ("Player 2 wins the Game!");
      } else {
         console.log ("The game is a tie!");
      }
}

