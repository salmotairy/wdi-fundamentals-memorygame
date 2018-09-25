console.log("Up and running!");


var cardsArry = [
{
	rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-diamonds.png'
},
{
	rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
];
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
console.log("User flipped " + cards[cardId].rank)
console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)

cardsInPlay.push('cards[cardId].rank');
If (cardsInPlay.length ===2) {
}
}
flipCard(0);
flipCard(2);
