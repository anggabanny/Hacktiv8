function gcd (firstNumber, secondNumber) {
    // Your code here
    hasil = 0;
    for(i = 0; i < secondNumber; i++){
        if((firstNumber%i === 0) && (secondNumber%i === 0)){
            hasil = i
        }
    }
    return hasil
}
  // TEST CASES
  console.log(gcd(12, 16)); // 4
  console.log(gcd(50, 40)); // 10
  console.log(gcd(22, 99)); // 11
  console.log(gcd(24, 36)); // 12
  console.log(gcd(17, 23)); // 1