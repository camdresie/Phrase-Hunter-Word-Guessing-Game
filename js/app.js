/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const keyboard = document.querySelector('#qwerty');

 /*
 * Starts a new game and then sets an event listener on the start game button. If a user clicks the 
 * button, the game will begin by calling startGame(). 
 */

let game;
document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.resetGame();
    game.startGame();
})

keyboard.addEventListener('click', (e) => {
    const button = e.target;
    if (button.className === 'key') {
        game.handleInteraction(button);
    }
})