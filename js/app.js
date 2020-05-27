/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*
 * Starts a new game and then sets an event listener on the start game button. If a user clicks the 
 * button, the game will begin by calling startGame(). 
 */

// let game;
// document.getElementById('btn__reset').addEventListener('click', (e) =>{
//     game = new Game();
//     game.startGame();
// });
const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});