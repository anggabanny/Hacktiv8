function isPrime (number) {
    // Your code here
var temp = true
    for(i = 2; i < number; i++){
        if(number % i == 0) {
            temp = false
        }
    }
    return temp
}
  
  // TEST CASES
  console.log(isPrime(3)); // true
  console.log(isPrime(7)); // true
  console.log(isPrime(6)); // false
  console.log(isPrime(23)); // true
  console.log(isPrime(33)); // false