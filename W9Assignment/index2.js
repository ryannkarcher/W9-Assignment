
const Suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
const Values = [{"A":14}, {"K":13}, {"Q":12}, {"J":11}, {"10":10},
   {"9":9}, {"8":8}, {"7":7}, {"6":6}, {"5":5}, {"4":4}, {"3":3}, {"3":3}];

class Deck {
   constructor (cards = freshDeck()){
      this.cards =  cards;
   }

   get numberOfCards(){
      return this.cards.length
   }

   shuffle(){
      for (let i = this.numberOfCards - 1; i>0; i--){
         const newIndex = Math.floor(Math.random() *(i+1));
         const oldValue = this.cards[newIndex];
         this.cards[newIndex] = this.cards[i];
         this.cards[i] = oldValue;
      }
   }
}


class Player {
   constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
   }
}

class Card {
   constructor(suit, value, player1Card, player2Card){
      this.suit = suit;
      this.value = value;
      this.player1Card = player1Card;
      this.player2Card = player2Card;
   }
}

function freshDeck() {
   return Suits.flatMap(suit => {
      return Values.map(value => {
         return new Card(suit, value);
      })
   })
}

const deck = new Deck();
deck.shuffle();

let player1Deck, player2Deck;


startGame ()
function startGame() {
   const deck = new Deck();
   deck.shuffle();

// player 1 and 2 decks split evenly and ranadomly
   const deckMidpoint = Math.ceil(deck.numberOfCards/2);
   player1Deck = new Deck(deck.cards.slice(0, deckMidpoint));
   player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

   let player1Points =0;
   let player2Points =0;

   const gameRounds = 26;

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
}

console.log(`Player 1 Points: ${player1Points}`);
console.log(`Player 2 Points: ${player2Points}`);
if (player1Points > player2Points) {
   console.log ("Player 1 wins the Game!");
} else if (player1Points < player2Points) {
   console.log ("Player 2 wins the Game!");
} else {
   console.log ("The game is a tie!");
}
