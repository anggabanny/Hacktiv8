function reverseString (text) {
    var split = text.split('');
    var g = split.reverse();
    var join = g.join('') 
    return join
  }
  
  // var pemisah = "";
  // for (var i = string.length - 1; i >= 0; i--) {
  //     pemisah += string[i];
  // }
  // return pemisah;

  // TEST CASES
  console.log(reverseString('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(reverseString('John Doe')); // eoD nhoJ
  console.log(reverseString('I am a bookworm')); // mrowkoob a ma I
  console.log(reverseString('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(reverseString('Super')); // repuS