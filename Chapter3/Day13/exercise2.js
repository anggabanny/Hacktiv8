function digitExplosion(digit){
    var temp ='';
    for(i = 0; i < digit.length; i++){
        for(j = 0; j < digit[i]; j++){
            temp += digit[i]
        }
    }
    return(temp);
}

console.log(digitExplosion([1,2,3])); //122333
console.log(digitExplosion([4,5,6])); //444455555666666