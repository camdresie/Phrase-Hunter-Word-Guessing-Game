/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/** 
 * Declares game class with properties missed, phrases, and activePhrase.
*/

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

/**
* Creates phrases for use in game.
* @return {array} An array of phrases that could be used in the game
*/

    createPhrases() {
        const phraseArray = [];
        const phrase1 = `I was born this way`;
        const phrase2 = `Rain on my parade`;
        const phrase3 = `What goes up must come down`;
        const phrase4 = `Keep on Keeping on`;
        const phrase5 = `Like father like son`;
        phraseList.forEach(phrase => {
            phraseArray.push(phrase);
        })
        phraseArray.push(phrase1, phrase2, phrase3, phrase4, phrase5);
        const phraseObjectArray = [];
        phraseArray.forEach(phrase => {
            const newPhrase = new Phrase(phrase);
            phraseObjectArray.push(newPhrase);
        })
        return phraseObjectArray;
    }

    /**
     * Displays the players current number of wins, current number of games played, and win percentage
     */
    displayStats() {
        document.getElementById('games-played').innerHTML = "Games Played: " + gamesPlayed;
        document.getElementById('games-won').innerHTML = 'Games Won: ' + gamesWon;
        document.getElementById('win-percentage').innerHTML = 'Win Percentage: ' + winPercentage;
    }

/**
* Selects random phrase from phrases property.
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        let i = (Math.floor(Math.random() * this.phrases.length));
        let phrase = this.phrases[i]
        return phrase;
    }

/**
* Begins game by selecting a random phrase and hiding the starting screen from the user. 
*/

    startGame() {
        document.getElementById('overlay').style.visibility = 'hidden';
        this.displayStats();
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay();
    }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
* won
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
* Increases the value of the missed property.
* Removes a life from the scoreboard.
* Checks if player has remaining lives and ends game if player is out.
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
* This method displays a game over message if the game ends. There is a winning message if the user wins and 
* a losing message if the user loses. 
*/

    gameOver(gameWon) {
        document.getElementById('overlay').style.visibility = 'visible';
        if (gameWon) {
            document.getElementById('overlay').className = 'win';
            document.getElementById('game-over-message').textContent = `Congratulations! You guessed the phrase! The phrase was ${this.activePhrase.phrase}!`;
            gamesWon++;
            gamesPlayed++;
            winPercentage = ((gamesWon / gamesPlayed) * 100).toFixed(2).toString() + '%';
        } else {
            document.getElementById('overlay').className = 'lose';
            document.getElementById('game-over-message').textContent = `Boo! You didn't get the phrase this time! The phrase was ${this.activePhrase.phrase}!`
            gamesPlayed++;
            winPercentage = ((gamesWon / gamesPlayed) * 100).toFixed(2).toString() + '%';
        }
    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element.
* This method calls the other methods checkLetter(), showMatchedLetter(), 
* removeLife(), checkForWin(), and gameOver(), if applicable when a user selects
* a letter on the onscreen keyboard. 
*/

    handleInteraction(button) {
        button.disabled = true;
        const letter = button.innerHTML;
        if (game.activePhrase.checkLetter(letter) === false) {
            button.classList += ' wrong';
            this.removeLife();
        } else if (game.activePhrase.checkLetter(letter) === true) {
            button.classList += ' chosen';
            game.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }

/**
 * The resetGame() method takes no parameters and resets all of the game parameters when a user selects 'start game'
 * including their number of lives, the keys that have been selected, 
 */
    resetGame() {
        const list = document.querySelector('#phrase ul');
        while (list.firstChild) {
            list.removeChild(list.lastChild);
        }
        const keyboard = document.querySelectorAll('#qwerty button');
        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].className = 'key';
            keyboard[i].disabled = false;
        }
        const lives =  document.querySelectorAll('[src="images/lostHeart.png"]');
        for (let i = 0; i < lives.length; i++) {
            lives[i].src = 'images/liveHeart.png';
        }
    }
    
}