/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const target = document.getElementById("target");
let array = ["CHEZ KMU LOCATION",""];
let array2 = ["Nos_références:", ""];
let wordIndex = 0;
let letterIndex = 0;
let wordIndex2 = 0;
let letterIndex2 = 0;

const creatLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 3000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      creatLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 3000);
    }
  }, 80);
};
loop();

const creatLetter2 = () => {
  const letter2 = document.createElement("span");
  target2.appendChild(letter2);
  letter2.textContent = array2[wordIndex2][letterIndex2];
  setTimeout(() => {
    letter2.remove();
  }, 1500);
};

const loop2 = () => {
  setTimeout(() => {
    if (wordIndex2 >= array2.length) {
      wordIndex2 = 0;
      letterIndex2 = 0;
      loop2();
    } else if (letterIndex2 < array2[wordIndex2].length) {
      creatLetter2();
      letterIndex2++;
      loop2();
    } else {
      wordIndex2++;
      letterIndex2 = 0;
      setTimeout(() => {
        loop2();
      }, 1500);
    }
  }, 60);
};
loop2();