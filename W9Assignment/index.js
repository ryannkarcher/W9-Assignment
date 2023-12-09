//first class is Ranks, which includes the value per card
// in the game of War, the highest value wins, and each card is named
// by a string, so it is important to cearly ID the value per name
class Ranks {
   constructor() {
      this.ranks = {
         "ace": 14, "king": 13, "queen": 12,
         "jack": 11, "ten": 10, "nine": 9,
         "eight": 8, "seven": 7, "six": 6,
         "five": 5, "four": 4, "three": 3, "two": 2
      };
   }
}


//second class is Cards, which creates an array that has the 52 cards.
//there is no need to identify card groups such as "Spade" or "Hearts"
// since it is not important to gaining points in the game.
class Cards {
   constructor() {
      this.cards = ["ace", "king", "queen", "jack", "ten", "nine", "eight",
      "seven", "six", "five", "four", "three", "two",
      "ace", "king", "queen", "jack", "ten", "nine", "eight",
      "seven", "six", "five", "four", "three", "two",
      "ace", "king", "queen", "jack", "ten", "nine", "eight",
      "seven", "six", "five", "four", "three", "two",
      "ace", "king", "queen", "jack", "ten", "nine", "eight",
      "seven", "six", "five", "four", "three", "two"];
   }
}


//third class, Game, creates the game. 
//includes this.cards to create the array that holds 52 cards and 
// includes this.ranks to create the object that holds the card values
class Game {
   constructor() {
      this.cards = new Cards();
      this.ranks = new Ranks();
   }

   //function that sets up the game 
   start() {
      let winner; //sets string variable for the winner

      //function that will shuffle, or randomize, the 52 cards for the
      // two players playing the game. 
      function shuffleCards(array) {
         let orderedCards = array.length, shuffledCards;

         //while loop uses Math.random to randomize the cards. add one
         // in order to make sure it pulls from 1-52 of the cards instead of 
         // 0-52
         while (orderedCards !=0) {
            shuffledCards = Math.floor(Math.random()*orderedCards)+1;
            orderedCards--;

            //swaps unshuffled, or ordered, array with the shuffled,
            // or randomized, array
            [array[orderedCards], array[shuffledCards]] = 
            [array[shuffledCards], array[orderedCards]];
         }
         return array;
      }

      //at this point, the 52 cards array is passed into the shuffleCards
      // function and results are saved to the deck variable below
      let deck = shuffle(this.cards.cards);

      //card values are saved in the ranks variable below after the shuffle
      let ranks = this.ranks.ranks;

      //the variable below splits the deck in half to distribute to
      //2 players, 26 cards each
      let splitTheDeck = deck.length/2;

      //these hands are which cards are given to each player
      let hand1 = deck; // currently gives all 52 cards to first player
      let hand2 = hand1.slice(splitTheDeck); //gives half the cards to player 2


      for (let i=o; i<splitTheDeck; i++) {
         hand1.pop(); // gives other half to player 1
      }

      //each player starts the game with 0 points
      let player1Points = 0;
      let player2Points = 0;

      //for loop that does the math on who gets points. player
      // with higher cards gets 1 point. if they tie, no points.
      for (let i=0; i<deck.length; i++) {
         if (ranks[hand1[i]] > ranks[hand2[i]]) {
            player1Points++;
         } else if (ranks[hand1[i]] < ranks[hand2[i]]) {
            player2Points++;
         } else {
            player1Points += 0;
            player2Points += 0;
         }
      }

      //determines the winner
      if(player1Points >player2Points) {
         winner = "Player 1";
      } else {
         winner = "Player 2";
      }

      //displays the results
      let results = `In this round: [ Player 1 = ${player1Points} points] 
      and [ Player 2 = ${player2Points} points] >> ${winner} is the winner!`;

      return results;
   }
}
let play = new Game(); 