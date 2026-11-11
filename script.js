class Card {
  constructor(suit, name, rank) {
    this.suit = suit;
    this.name = name;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
}

createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

    for (const suit of suits) {
        for (let i = 0; i < names.length; i++) {
            const card = new Card(suit, names [i], i + 1);
            this.cards.push(card);
        }
    }
}

const deck = new Deck();
deck.createDeck();

console.table(deck.cards);
console.log("nummber of cards", deck.cards.length);