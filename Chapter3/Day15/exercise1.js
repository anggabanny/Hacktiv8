function threeStepsAB (text) {
    // Your code here
    var back = false
    for(i = 0; i < text.length; i++){
        if(text[i] == 'a'){
            if(text[i+4] == 'b'){
                back = true
            }
        } else if(text[i] == 'b'){
            if(text[i+4] == 'a'){
                back = true
            }
        }
    }
    return back
}

  // TEST CASES
  console.log(threeStepsAB('lane borrowed')); // true
  console.log(threeStepsAB('i am sick')); // false
  console.log(threeStepsAB('you are boring')); // true
  console.log(threeStepsAB('barbarian')); // true
  console.log(threeStepsAB('bacon and meat')); // false