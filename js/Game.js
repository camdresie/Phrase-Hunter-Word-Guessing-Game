/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

    createPhrases() {
        const phraseArray = [];
        const phrase1 = `I was born this way`;
        const phrase2 = `Rain on my parade`;
        const phrase3 = `What goes up must come down`;
        const phrase4 = `Keep on Keeping on`;
        const phrase5 = `Like father like son`;
        phraseArray.push(phrase1, phrase2, phrase3, phrase4, phrase5);
        const phraseObjectArray = [];
        phraseArray.forEach(phrase => {
            const newPhrase = new Phrase(phrase);
            phraseObjectArray.push(newPhrase);
        })
        return phraseObjectArray;
    }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        let i = (Math.floor(Math.random() * this.phrases.length));
        let phrase = this.phrases[i]
        return phrase;
    }

/**
* Begins game by selecting a random phrase and displaying it to user
*/

    startGame() {
        document.getElementById('overlay').style.visibility = 'hidden';
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay();
    }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/

    checkForWin() {
        const hiddenCharacters = document.querySelectorAll('.hide');
        if (hiddenCharacters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

    removeLife() {
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        } else {
           document.querySelector('[src="images/liveHeart.png"]').src = 'images/lostHeart.png';
        }

    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

    gameOver(gameWon) {
        document.getElementById('overlay').style.visibility = 'visible';
        if (gameWon) {
            document.getElementById('overlay').className = 'win';
            document.getElementById('game-over-message').textContent = `Congratulations! You guessed the phrase!`;
        } else {
            document.getElementById('overlay').className = 'lose';
            document.getElementById('game-over-message').textContent = `Boo! You didn't get the phrase this time!`;
        }
    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

    handleInteraction(button) {
        console.log(button);
        button.disabled = true;
        if (game.activePhrase.checkLetter(button) === false) {
            button.classList += ' wrong';
            this.removeLife(button);
        } else if (game.activePhrase.checkLetter(button) === true) {
            button.classList += ' chosen';
            phrase.showMatchedLetter(button);
            this.checkForWin();
            if (this.checkForWin) {
                this.gameOver(true);
            }
        }
    }
    
}