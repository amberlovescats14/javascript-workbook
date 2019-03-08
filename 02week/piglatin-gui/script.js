var original = document.querySelector("#piglatin")
var button = document.querySelector("#submit")

function translate(){
  let word =document.querySelector("#piglatin").value
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
       document.querySelector("#label").innerHTML = together
  
     } else if 
     (indexE < adjusted.length && indexE > -1) {
       
      let adjustedCopy = adjusted.split()
      let length = adjustedCopy.length
      let vowelE=  indexE
      let atVowel = adjusted.slice(vowelE)
      let leftOver = adjusted.slice(0, vowelE)
      let final = atVowel + leftOver
      let apart = final.toString().split("")
      let ending = apart.push('ay')
      let together = apart.join('')
      document.querySelector("#label").innerHTML = together
  
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
      document.querySelector("#label").innerHTML = together
  
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
      document.querySelector("#label").innerHTML = together
  
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
        document.querySelector("#label").innerHTML = together
   
      } }
      clearInput()
    }
  
  function clearInput() {
    document.querySelector("#piglatin").value = ""
  }
  
button.addEventListener('click', translate)

