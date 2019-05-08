function pasanganTerbesar(number) {
  var string = number.toString();
  var length = string.length
  var max = 0;

  for(i = 0; i < length - 1 ; i++){
    var slice = string[i] + string [i+1];

    if(max < slice) {
      max = slice
    }
  }
  return max
}
    
console.log(pasanganTerbesar(12783456)); //83
console.log(pasanganTerbesar(9102331)); //91
console.log(pasanganTerbesar(71856421)); //85
console.log(pasanganTerbesar(79918293)); //99