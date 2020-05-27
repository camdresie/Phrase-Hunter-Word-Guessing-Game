/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
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

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false
        }
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/

    showMatchedLetter(letter) {
        const lettersArray = document.querySelectorAll('#phrase ul li');
        lettersArray.forEach(item => {
            if (letter === item.innerHTML) {
                item.classList.remove('hide');
                item.classList.add('show');
            }
        });
    }

 }