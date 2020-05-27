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

//     addPhraseToDisplay() {
//        const phraseUl = document.querySelector('#phrase ul');
//        for (let i = 0; i < this.phrase.length; i++) {
//            if (this.phrase.charAt(i) === ' ') {
//                const phraseSpaceLi = document.createElement('li');
//                phraseSpaceLi.textContent = ' ';
//                phraseSpaceLi.setAttribute('class', 'space');
//                phraseUl.appendChild(phraseSpaceLi);
//            } else {
//                const phraseLetterLi = document.createElement('li');
//                phraseLetterLi.textContent = this.phrase[i];
//                phraseLetterLi.setAttribute('class', `hide letter ${this.phrase[i]}`);
//                phraseUl.appendChild(phraseLetterLi);
//            }
//        }
//     }

// /**
// * Checks if passed letter is in phrase
// * @param (string) letter - Letter to check
// */

//     checkLetter(letter) {
//         const correctLetters = [];
//         for (let i = 0; i < this.phrase.length; i++) {
//             if (letter = this.phrase[i].textContent) {
//                 correctLetters.push(letter);
//             }
//         }
//         if (correctLetters.length !== 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// /**
// * Displays passed letter on screen after a match is found
// * @param (string) letter - Letter to display
// */

//     showMatchedLetter(letter) {
//         for (let i = 0; i < this.phrase.length; i++) {
//             if (letter = this.phrase[i]) {
//                 const matchedLetters = document.querySelectorAll(`.${letter}`);
//                 for (let i = 0; i < matchedLetters.length; i++) {
//                     matchedLetters[i].classList.remove('hide');
//                     matchedLetters[i].classList.add('show');
//                 }
//             }
//         }
//     }


 }