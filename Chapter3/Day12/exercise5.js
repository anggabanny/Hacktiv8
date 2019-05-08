function nilaiTengah(numbers){
    var tengah = Math.floor(numbers.length / 2); //mencari nilai tengah

  if (numbers.length % 2 == 1){
      return numbers[tengah];
  } else
      return (numbers[tengah - 1] + numbers[tengah]) / 2;
}

console.log(nilaiTengah([1,2,3]));
console.log(nilaiTengah([1,2,3,4]));
