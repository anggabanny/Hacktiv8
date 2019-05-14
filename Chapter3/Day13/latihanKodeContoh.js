function removeSpaces (text) {
  // Code to remove spaces from text
  return text.split(' ').join('')
  
}

function reverseText (text) {
  // Code to reverse the text
  return text.split('').reverse().join('')
}

function updateVowels (text) {
  // Code to update vowels
  var pisah = text.split('')
  temp = []
  for(i = 0; i < pisah.length; i++){
    if(i == 0){
    var baru = pisah[i].toUpperCase()
    temp.push(baru)
    } else
    temp.push(pisah[i])
  }
  return temp.join('')
}

var password = 'dimitri w';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);
console.log(encryptedPassword);