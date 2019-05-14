console.log('----------------REKURSIF-----------------');
function countLetters(word, letter) {
var count = 0
var slice = word.slice(1)

    if (word[0] == letter) {
        count = count + 1
    } else if (word.length == 0){
        return count
    }
return count + countLetters(slice, letter)
}

  // TEST CASES
  console.log(countLetters('12104123', '1'));  // 3
  console.log(countLetters('the quick brown fox', 'o')); // 2
  console.log(countLetters('lorem ipsum', 'a')); // 0
  console.log(countLetters('hahaha', 'h')); // 3

console.log('______________________________________________');

console.log('----------------LOOPING-----------------');
function countLetters(word, letter) {
    var split = word.split('')
    count = 0
    for(i = 0; i <split.length; i++){
        if(split[i] == letter){
            count++
        }
    }
    return count
}

  // TEST CASES
  console.log(countLetters('12104123', '1'));  // 3
  console.log(countLetters('the quick brown fox', 'o')); // 2
  console.log(countLetters('lorem ipsum', 'a')); // 0
  console.log(countLetters('hahaha', 'h')); // 3