class Card {
  constructor(suit, name, rank) {
    this.suit = suit;
    this.name = name;
    this.rank = rank;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }

  createDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const names = [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
    ];

    for (const suit of suits) {
      for (let i = 0; i < names.length; i++) {
        const card = new Card(suit, names[i], i + 1);
        this.cards.push(card);
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [this.cards[i], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[i],
      ];
    }
  }
}

const deck = new Deck();

deck.createDeck();

console.log("Original deck:");
console.table(deck.cards);

deck.shuffle();

console.log("Shuffled deck:");
console.table(deck.cards);

console.log("Number of cards:", deck.cards.length);

console.log(
  "All cards have values:",
  deck.cards.every((card) => typeof card.rank === "number"),
);

/* Del 2 */
