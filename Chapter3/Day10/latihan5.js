function deretAritmatika(number) {
    var cariSelisih1 = number[1] - number[0];
    var value = true;
    
    for(var i = 0; i < number.length -1; i++) {
      var cariSelisih2 = number[i+1] - number[i];
      console.log(cariSelisih2);
      
      if(cariSelisih2 !== cariSelisih1) {
        value = false;
      }
    }
    return value;
  }

console.log(deretAritmatika([2,4,6,8])); //true
console.log(deretAritmatika([2,6,18,54])); //false
console.log(deretAritmatika([1,2,3,4,7,9])); //false
console.log(deretAritmatika([1,3,5,7,9])); //true