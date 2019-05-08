function sort(angka){
    var angkaLength = angka.length;
    for (i = angkaLength  -1 ; i >= 0 ; i--){
      for(j = 1 ; j <= i ; j++){
        if( angka [j-1] > angka[j]){

            var temp = angka[j-1];
            angka[j-1] = angka[j];
            angka[j] = temp;
         }
      }
    }
    return angka;
}
console.log(sort([3,1,2]));
console.log(sort([1,2,3]));