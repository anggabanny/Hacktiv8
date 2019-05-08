function compareNumbers (firstNumber, secondNumber) {

    var temp = '';

    if(firstNumber < secondNumber){
        temp = true
    } else if (firstNumber > secondNumber){
        temp = false
    } else if (firstNumber == secondNumber){
        temp = -1
    }

    return temp
  }
  
  // TEST CASES
  console.log(compareNumbers(5, 8)); // true
  console.log(compareNumbers(5, 3)); // false
  console.log(compareNumbers(4, 4)); // -1
  console.log(compareNumbers(3, 3)); // -1
  console.log(compareNumbers(17, 2)); // false