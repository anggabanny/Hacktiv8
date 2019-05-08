function sortByCharacter (text) {
    // var a = text.split('').sort().join('');  // CARA SINGKAT BUILT IN FUNCTION
    var split = text.split('');
      for(i = 0; i < split.length ; i++){
        for(j = i + 1; j < split.length; j++){
          if(split[i] > split[j]){
            var temp = split[i]
            split[i] = split[j]
            split[j] = temp
          }
        }
      }
    return split.join('')
  }
  
  // TEST CASES
  console.log(sortByCharacter('hello')); // 'ehllo'
  console.log(sortByCharacter('truncate')); // 'acenrttu'
  console.log(sortByCharacter('developer')); // 'deeeloprv'
  console.log(sortByCharacter('software')); // 'aeforstw'
  console.log(sortByCharacter('aegis')); // 'aegis'
