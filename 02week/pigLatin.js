'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let adjusted = word.toLowerCase().trim()
  let indexA = adjusted.indexOf('a')
  let indexE = adjusted.indexOf('e')
  let indexI = adjusted.indexOf('i')
  let indexO = adjusted.indexOf('o')
  let indexU = adjusted.indexOf('u')
  let eachLetter = adjusted.split("")
   if (indexA < adjusted.length && indexA > -1) {
     
     let adjustedCopy = adjusted.split()
     let length = adjustedCopy.length
     let vowelA=  indexA
     let atVowel = adjusted.slice(vowelA)
     let leftOver = adjusted.slice(0, vowelA)
     let final = atVowel + leftOver
     let apart = final.toString().split("")
     let ending = apart.push('ay')
     let together = apart.join('')
     return together

   } 


  
  

  let letterA = "a"
  let vowel1 = ['a', 'e', 'i', 'o', 'u']
  // return wordString


  // eachLetter.forEach(letter => {
  //   if (wordString.indexOf() != vowel1){
  //     return "true"
  //   }
  // });

  
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
