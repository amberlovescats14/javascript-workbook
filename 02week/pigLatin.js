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
  let firstLetter = adjusted.indexOf(0)
  let vowelArr = ['a', 'e', 'i', 'o', 'u']
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

   } else if (indexE < adjusted.length && indexE > -1) {
     
    let adjustedCopy = adjusted.split()
    let length = adjustedCopy.length
    let vowelE=  indexE
    let atVowel = adjusted.slice(vowelE)
    let leftOver = adjusted.slice(0, vowelE)
    let final = atVowel + leftOver
    let apart = final.toString().split("")
    let ending = apart.push('ay')
    let together = apart.join('')
    return together

  }  else if (indexI < adjusted.length && indexI > -1) {
     
    let adjustedCopy = adjusted.split()
    let length = adjustedCopy.length
    let vowelI=  indexI
    let atVowel = adjusted.slice(vowelI)
    let leftOver = adjusted.slice(0, vowelI)
    let final = atVowel + leftOver
    let apart = final.toString().split("")
    let ending = apart.push('ay')
    let together = apart.join('')
    return together

  } else if (indexO < adjusted.length && indexO > -1) {
     
    let adjustedCopy = adjusted.split()
    let length = adjustedCopy.length
    let vowelO=  indexO
    let atVowel = adjusted.slice(vowelO)
    let leftOver = adjusted.slice(0, vowelO)
    let final = atVowel + leftOver
    let apart = final.toString().split("")
    let ending = apart.push('ay')
    let together = apart.join('')
    return together

  } else {if (indexU < adjusted.length && indexU > -1) {
     
      let adjustedCopy = adjusted.split()
      let length = adjustedCopy.length
      let vowelU=  indexU
      let atVowel = adjusted.slice(vowelU)
      let leftOver = adjusted.slice(0, vowelU)
      let final = atVowel + leftOver
      let apart = final.toString().split("")
      let ending = apart.push('ay')
      let together = apart.join('')
      return together
 
    } }
 
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
