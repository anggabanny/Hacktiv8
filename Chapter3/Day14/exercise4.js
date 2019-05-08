function isArithmeticProgression (numbers) {

    var satu = numbers[1] - numbers[0]
    var boolean = true
    
        for(var x = 0; x < numbers.length -1; x++) {
            console.log(numbers[x+1] - numbers[x]);
            
            var dua = numbers[x+1] - numbers[x];
                if(dua !== satu) {
                boolean = false;
            }
    }
    return boolean;
}
  // TEST CASES
  console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
  console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
  console.log(isArithmeticProgression([2, 4, 6, 8])); // true
  console.log(isArithmeticProgression([2, 6, 18, 54])); // false
  console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false