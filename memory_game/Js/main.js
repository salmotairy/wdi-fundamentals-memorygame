console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay =[];
var checkForMatch = function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}
var flipCard = function flipCard(cardId) {
checkForMatch ();
console.log("User flipped " + cards[cardId]);
cardsInPlay.push('cards[cardId]');
If (cardsInPlay.length ===2) {
}
}
flipCard(0);
flipCard(2);
