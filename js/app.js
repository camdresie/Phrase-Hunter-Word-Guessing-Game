/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
/**
 * Games statistics to track during the user's session of playing the game, including games won, games played,
 * and the player's win percentage
 */
 let gamesWon = 0;
 let gamesPlayed = 0;
 let winPercentage = '100%';


/**
 * Starts a new game and then sets an event listener on the start game button. If a user clicks the 
 * button, the game will begin by calling startGame(). 
 */
let game;
document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.resetGame();
    game.startGame();
})

/** 
* This event listener calls the handleInteraction() method in the game class when
* a user selects a letter using the onscreen keyboard.
*/

const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (e) => {
    const button = e.target;
    if (button.className === 'key') {
        game.handleInteraction(button);
    }
})