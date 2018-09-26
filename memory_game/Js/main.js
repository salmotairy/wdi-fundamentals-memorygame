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
var flipCard = function flipCard() {
var cardId = this.getAttribute('data-id');
checkForMatch ();
console.log("User flipped " + cardsArry[cardId].rank)
console.log(cardsArry[cardId].cardImage)
console.log(cardsArry[cardId].suit)

cardsInPlay.push('cardsArry[cardId].rank');

this.setAttribute('src', cardsArry[cardId].cardImage);


If (cardsInPlay.length ===2) {

var createBoard = function createBoard() {
	for (var i = 0; i < cardsArry.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', 'i');
cardElement.addEventListener('click', flipCard);
document.getElementsById('game-board')[i].appendChild(cardElement);
}
}
}
createBoard();
