// Imports
// EXMEPLE: import { deck } from "./game/app.js";
// HTML Elements
// EXEMPLE: const dealCardButton = document.getElementById("btn-dealCard");
// Events handler
// Initialisation
// EXEMPLE: dealCardButton?.addEventListener("click", () => deck.dealCard());
//-----------------------------------------------------debug
import BaccaratGame from "./game/baccaratGame.js";
import Player from "./game/player.js";
import { BetOption } from "./types.js";
//init game
const game = new BaccaratGame();
//new player
let p1 = new Player("bob");
let p2 = new Player("John");
let p3 = new Player("Natoo");
//join table
game.addPlayer(p3, 0);
game.addPlayer(p1, 2);
game.addPlayer(p2, 1);
//bet
game.placeBets([
    { amount: 10,
        option: BetOption.Banker },
    { amount: 50,
        option: BetOption.Banker },
    { amount: 20,
        option: BetOption.Tie },
    { amount: 0,
        option: null }
]);
console.log("la table vient de parier: ", game.puntos);
//draw
game.draw();
console.log("main du banquier: ", game.banker);
console.log("main du joueur: ", game.player);
//check third draw + result + 
game.isNatural();
console.log("main du banquier: ", game.banker);
console.log("main du joueur: ", game.player);
console.log("résultat: ", game.result);
//payment
game.payoutBets();
console.log("cagnotte du casino: ", game.bankroll);
console.log("statistics des joueurs à table: ", game.puntos);
//remove players
game.removePlayer(0);
console.log("Natoo vient de quitter la table: ", game.puntos);
