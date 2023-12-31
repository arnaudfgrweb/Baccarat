/**
 * Class Deck
 *
 * Cette classe représente le modèle d'un deck.
 * Elle fournit des opérations pour manipuler :
 *      - les cartes
 *
 * @version : 0.01
 * */
import Card from "./card.js";
class Deck {
    constructor() {
        this.cards = [];
        this.initializeDeck();
        this.shuffle();
    }
    initializeDeck() {
        const suits = ['♠', '♥', '♦', '♣'];
        const values = {
            'As': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 0,
            'J': 0,
            'Q': 0,
            'R': 0
        };
        for (const suit of suits) {
            for (const [key, value] of Object.entries(values)) {
                const cardValue = {};
                cardValue[key] = value;
                const card = new Card(cardValue, suit);
                this.cards.push(card);
            }
        }
    }
    getDeckSize() {
        return this.cards.length;
    }
    isDeckEmpty() {
        return this.cards.length === 0;
    }
    shuffle() {
        for (let currentIndex = this.cards.length - 1; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
    dealCard() {
        return !this.isDeckEmpty() ? this.cards.splice(0, 1)[0] : null;
    }
}
export default Deck;
