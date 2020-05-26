/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
       const phraseDiv = document.createElement('div');
       phraseDiv.setAttribute('class', 'section');
       phraseDiv.setAttribute('id', 'phrase');

    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
 }