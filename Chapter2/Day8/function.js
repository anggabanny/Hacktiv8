// function tampilkan() {
//     console.log("halo!");
//   }
  
//   tampilkan();

// -------------------------------------------------------------------

// function bar (name, age, money){
//         if (name == ''){
//             return ('anda tidak boleh masuk');
//         } else if (name !=''){
//             console.log('Hai ',name);
//             var juice = 50000;
//                 anggur = 300000;
//                     if(age < 17){
//                         if(money>=50000){
//                             console.log('anda hanya bisa membeli "juice"','\nuang anda sekarang', money,'\nharga juice =',juice);
//                             return (money = money - juice)
//                         } else {
//                             console.log('uang anda tidak mencukupi');
//                         }
//                     } else {
//                         if(money >=300000){
//                             console.log('anda hanya bisa memesan "anggur",', '\nuang anda sekarang', money,'\nharga anggur=',anggur);
//                             return(money = money - anggur)
//                         } else {
//                             console.log('uang anda tidak mencukupi');
//                         }
//                     }
//                 return('sisa uang anda :',money,'\nTerimakasih')
//             }
//         } console.log(bar('angga', 15, 300000 ))

// ---------------------------------------------------------------------

// function bintang1(bintang){
// for(var i= 1; i <= 5; i = i + 1){
//     for(var j=0 ; j < i ; j = j  + 1){
//         bintang = bintang + '*';
//     }
//     bintang = bintang + '\n';
// } return (bintang)
// } console.log (bintang1(bintang = ''));

// -----------------------------------------------------------------

// function bintang2(bintang){

// for(var i= 1; i <=5; i = i + 1){
//     for(var j=5 ; j > i ; j = j - 1){
//         bintang = bintang + ' ';
//         }
//         for(var k=0 ; k<i ; k++){
//             bintang = bintang + '*';
//     }
//     bintang = bintang + '\n';
// }
//     return(bintang);
// } console.log(bintang2(bintang = ''))

// ---------------------------------------------------------------------

// function bintang3(bintang){

// for(var i= 1; i <=5; i = i + 1){
//     for(var j=5 ; j > i ; j = j - 1){
//         bintang = bintang + '+';
//         }
//         for(var k=0 ; k<i ; k++){
//             bintang = bintang + '*';
//     }
//     bintang = bintang + '\n';
// }
//     return(bintang);
// }
// console.log(bintang3(bintang = ''))

// ----------------------------------------------------------------

// function tanggalBulan(tanggal, bulan, tahun){

//     if((bulan >=1) && (bulan <=12),
//         (tanggal >= 1) && (tanggal <=31),
//         (tahun >= 1900) && (tahun <=2030)){
//             switch(bulan) {
//                 case 1:   { bulan = 'Januari'; break; }
//                 case 2:   { if((tanggal >=1)&&(tanggal<=28)){
//                                 bulan = 'Februari';}
//                             else {
//                                 tanggal = 'Invalid';
//                                 bulan= '';
//                                 tahun= '';
//                                 } break;}
//                 case 3:   { bulan = 'Maret'; break; }
//                 case 4:   { bulan = 'April'; break; }
//                 case 5:   { bulan = 'Mei'; break; }
//                 case 6:   { bulan = 'Juni'; break; }
//                 case 7:   { bulan = 'Juli'; break; }
//                 case 8:   { bulan = 'Agustus'; break; }
//                 case 9:   { bulan = 'September'; break; }
//                 case 10:  { bulan = 'Oktober'; break; }
//                 case 11:  { bulan = 'November'; break; }
//                 case 12:  { bulan = 'Desember'; break; }
//                 default:{break;}
//                 }
//                 hasil = tanggal+' '+ bulan+' '+tahun;
//                 return(hasil)
//     } else
//         return('pastikan tanggal, bulan, dan tahun yang diinput benar')
// }   console.log (tanggalBulan(27, 2, 2019))

// ---------------------------------------
// Math.floor
// %
// /
// --------------------------------------------
// function satu(angka1, angka2){
//     if(angka1<angka2){
//         return('True');
//     } else if (angka1>angka2){
//         return('false');
//     } else
//         return('tidak ada nilai yang di bandingkan');
// }
// function dua(angka1, angka2){
//     if(angka1<angka2){
//         return('false');
//     } else if (angka1>angka2) {
//         return('true');
//     }else
//     return('tidak ada nilai yang di bandingkan');
// }

// console.log('--------Case Kurang Dari-----------')
// console.log(satu(3,8))
// console.log(satu(5,2))
// console.log(satu())
// console.log('--------Case Lebih Dari-----------')
// console.log(dua(3,8))
// console.log(dua(5,2))
// console.log(satu())
// ---------------PALINDROME------------------------
// function palindrome(number){
//     var numberAux = number;
//         var reversedNumber = 0;

//         while(numberAux>0){
//             var rightDigit = Math.floor(numberAux%10);
//             reversedNumber = reversedNumber*10+rightDigit;
//             numberAux=Math.floor(numberAux/10);
//         }
//         if(number == reversedNumber){
//             return true;
//         } else
//             return false;
// } console.log(palindrome());
// ---------------------------------------

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------