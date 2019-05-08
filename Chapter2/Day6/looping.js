// WHILE-----------------------
// var deret = 5;
//     jumlah = 0;
// while(deret > 0){
//     jumlah += deret
//     deret--
//     console.log('jumlahnya sekarang:', jumlah);
// }
// console.log('hasil akhir:', jumlah);

// FOR-------------------
// for (i = 0; i < 10; i = i + 1){
//     console.log ('iterasi ke - ', i + 1)
// }

// for (i = 10; i > 0; i = i - 1){
//     console.log ('iterasi ke - ', i)
// }


// LATIHAN ------------

// cek angka dari 1 sampe 100, ganjil atau genap

// for(var angka = 0; angka <=100; angka = angka + 1){
//     if(angka % 2 == 0){
//         console.log('angka ke-'+angka+' bilangan genap')
//     } else
//         console.log('angka ke-'+angka+' bilangan ganjil')
    
// }
// -----------------------

// loping 1 = 100 , setiap kelipatan 5 = console //bebas
// var jumlah = 0;
// for (var angka = 5; angka <= 100; angka = angka + 5){
//     console.log (angka, 'kelipatan + 5')
// }
// -----------
// var jumlah = 0;
// for (var angka = 1; angka <=100; angka =  angka + 1){
//         jumlah = jumlah + angka
//         if(jumlah %5 == 0){
//             console.log(jumlah,' kelipatan 5')
//         } else
//             console.log(jumlah)
// }
// -------------SEGITIGA---------------
// var bintang='';

//     for(var i = 1; i <= 10;  i = i + 1){
//         console.log(i , bintang+='*')
//         }
// ----------lenght--------------
// var bintang='';

//     for(var i = 1; i <= 10;  i = i + 1){
//         console.log('i =', i, bintang +='*', bintang.length)
//         }
// -----------LOOPING NEST-------------------
// for(){
//     for(){

//     }
// }
// -------------latihan-----------------
// ------------------BINTANG && PLUS------------------------------------------
// var bintang='';
//     plus='';

// for(var i = 1; i <= 5;  i = i + 1){
//     if(i % 2 == 0){
//         console.log( i, bintang +='**', bintang.length);
//     } else if ( i == 1){
//         console.log( i, plus +='+', plus.length);
//     } else
//         console.log( i, plus +='++', plus.length);
//     }
// ----------------CARA 2-----------
// var bintang= '';
//     plus= '';

// for (i = 1; i <= 5 ; i++){
//     if(i % 2 == 0){
//         for(j = 0; j < 1 ; j = j + 1){
//             console.log(i, bintang = bintang + '**', 'Genap', bintang.length)
//         }
//     }else if(i == 1){
//         for(l = 0; l < 1; l++){
//         console.log(i, plus = plus + '+', 'Ganjil', plus.length)
//         }
//     }else
//         for(k = 0; k < 1 ; k++){
//             console.log(i, plus = plus + '++', 'Ganjil', plus.length)
//         }
// }

// -------------------------------------
// for(i=1; i<=5 ; i++){
//     var tampil='';
//     var jenis='';
//         if (i%2 == 0) {
//             for(j=0;j<i;j++){
//                 tampil +='+'
//             }
//         jenis = 'genap';
//     } else {
//         for(k=0; k<i;k++) {
//             tampil +='*'
//         }
//         jenis = 'ganjil';
//     }
//     console.log(tampil,jenis)
// } 
// ------------------------------------------------------
// var bintang = '';

// for(var i= 5; i > 0; i = i - 1){
//     for(var j=0 ; j < i ; j = j + 1){
//         bintang = bintang + '*';
//     }
//     bintang = bintang + '\n';
// }
// console.log(bintang);

// ------------------------
// var temp=''

// for(i=1; i <=5; i++) {
//     for(j=0; j < i; j++){
//         temp = temp + '*'
//     }
//     temp = temp + '\n'
// }console.log(temp);