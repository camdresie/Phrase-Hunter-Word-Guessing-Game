/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }

/**
* Display phrase on game board
*/

    addPhraseToDisplay() {
       const phraseUl = document.querySelector('#phrase ul');
       for (let i = 0; i < this.phrase.length; i++) {
           if (this.phrase.charAt(i) === ' ') {
               const phraseSpaceLi = document.createElement('li');
               phraseSpaceLi.textContent = ' ';
               phraseSpaceLi.setAttribute('class', 'space');
               phraseUl.appendChild(phraseSpaceLi);
           } else {
               const phraseLetterLi = document.createElement('li');
               phraseLetterLi.textContent = this.phrase[i];
               phraseLetterLi.setAttribute('class', `hide letter ${this.phrase[i]}`);
               phraseUl.appendChild(phraseLetterLi);
           }
       }
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
 }