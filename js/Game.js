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
        return phraseArray;
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
        const phrase = new Phrase(randomPhrase)
        phrase.addPhraseToDisplay();
    }
 }