var bintang = '';

for(var a = 1; a <=5 ; a++){
    for(var b = 4; b >= a; b--){
    bintang +=' '
    }
    for (var c = 1; c <= a; c++){
        bintang +='*'
    }
    for (var d = 1; d <= a-1; d++){
        bintang +='*'
    }
    bintang +='\n';
}
console.log(bintang);