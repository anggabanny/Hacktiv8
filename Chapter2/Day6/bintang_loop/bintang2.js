var bintang = '';

for(var i= 5; i > 0; i = i - 1){
    for(var j=0 ; j < i ; j = j  + 1){
        bintang = bintang + '*';
    }
    bintang = bintang + '\n';
}
console.log(bintang);
