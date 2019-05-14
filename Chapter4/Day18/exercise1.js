console.log('----------------Cara 1-----Rekursif------------');
function numberIterator(num) {
if(num < 1){
    return num
}
return numberIterator(num -1) + String (num)
}
   // TEST CASES
   console.log(numberIterator(5)); // '012345'
   console.log(numberIterator(7)); // '01234567'
   console.log(numberIterator(3)); // '0123'
   console.log(numberIterator(1)); // '01'
   console.log(numberIterator(0)); // '0'

console.log('----------------Cara 2-----Rekursif------------');
function numberIterator(num) {
    var temp = ''
    if(num == 0){
        return 0
    }
    temp += num
    return numberIterator(num -1) + temp
}
   // TEST CASES
   console.log(numberIterator(5)); // '012345'
   console.log(numberIterator(7)); // '01234567'
   console.log(numberIterator(3)); // '0123'
   console.log(numberIterator(1)); // '01'
   console.log(numberIterator(0)); // '0'

console.log('----------------Cara 3-----Loop------------');
function numberIterator(num) {
temp = ''
for(i =0 ; i <= num; i++){
    temp += i
}
return temp
}

   // TEST CASES
   console.log(numberIterator(5)); // '012345'
   console.log(numberIterator(7)); // '01234567'
   console.log(numberIterator(3)); // '0123'
   console.log(numberIterator(1)); // '01'
   console.log(numberIterator(0)); // '0'