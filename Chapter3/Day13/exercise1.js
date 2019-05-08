function unikNumber(numbers) {
    var modus = []
    
    for (i = 0; i < numbers.length; i++) {
    count = 0
        for (j = 0; j < numbers.length; j++){
            if(numbers[i]==numbers[j]){
                count++
            }
        }
    if (count == 1){
        modus.push(numbers[i])
    }
    }
return modus
}
console.log(unikNumber([1,1,1,2,1,1,1]));
console.log(unikNumber([1,2,1,2,3,4,5]));