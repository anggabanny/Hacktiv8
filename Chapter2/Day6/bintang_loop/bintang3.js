var bintang = '';

for(var i= 1; i <=5; i = i + 1){
    for(var j=5 ; j > i ; j = j - 1){
        bintang = bintang + ' ';
        }
        for(var k=0 ; k<i ; k++){
            bintang = bintang + '*';
    }
    bintang = bintang + '\n';
}
console.log(bintang);