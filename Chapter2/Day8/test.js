// var satu = 8;
// var dua = 4;

// function persen(jumlah) {

//     if(satu < jumlah){
//         satu = (satu/jumlah)*(100);
//         testSatu = satu.toFixed(2)
        
//     } if(dua < jumlah){
//         dua  = (dua/jumlah)*(100);
//         testDua = dua.toFixed(2)
//     }
    
//     return testSatu+'%'+ ' ' + testDua+'%'
// }
// console.log(persen(12));

//// --------------------------------------------------------

function remove(s,n){
    for (var i=0;i<n;i++)
          s=s.replace("!","");
    return s;
  }

console.log (remove("Hi!",1))