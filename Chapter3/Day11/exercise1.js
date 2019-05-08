// ---------------------------1---------------------------------------------

var soal1 = [[[[[[[1, 2, 3, 4, 5]]]]]]];
var satu = soal1[0][0][0][0][0][0][0];
var dua = soal1[0][0][0][0][0][0][1];
var tiga = soal1[0][0][0][0][0][0][2];
var empat = soal1[0][0][0][0][0][0][3];
var lima = soal1[0][0][0][0][0][0][4];
    console.log(satu,dua,tiga,empat,lima);
// console.log( ['1' ['2' ['3' ['4' ['5' ['6' [ 1, 2, 3, 4, 5] ] ] ] ] ] ] );

// --------------------------------2----------------------------------------

var soal2 = [[1], [2, 3], [4, [5, 6]]];
var enam = soal2[0][0];
var tujuh = soal2[1][0];
var delapan = soal2[1][1];
var sembilan = soal2[2][0];
var sepuluh = soal2[2][1][0];
var sebelas = soal2[2][1][1];
    console.log(enam,tujuh,delapan,sembilan,sepuluh,sebelas);
// console.console.log([ [ 1 ] , [ 2 , 3 ] , [ 4, [ 5, 6 ] ] ]);

// ---------------------------------3---------------------------------------

var soal3 = [1, [2, [3, [4, [5]]]]];
var satu1 = soal3[0];
var dua2 = soal3[1][0];
var tiga3 = soal3[1][1][0];
var empat4 = soal3[1][1][1][0];
var lima5 = soal3[1][1][1][1][0];
    console.log(satu1,dua2,tiga3,empat4,lima5);
// console.console.log([1, [2, [3, [4, [5]]]]]);

// ----------------------------------4--------------------------------------

var soal4 = [[[1, [2], 3, [4], [[[[5]]]]]]];
var enam6 = soal4[0][0][0];
var tujuh7 = soal4[0][0][1][0];
var delapan8 = soal4[0][0][2];
var sembilan9 = soal4[0][0][3][0];
var sepuluh10 = soal4[0][0][4][0][0][0][0];
    console.log(enam6,tujuh7,delapan8,sembilan9,sepuluh10);
// console.console.log([[[1, [2], 3, [4], [[[[5]]]]]]]);

// -----------------------------------5-------------------------------------

var soal5 = [1, [[2, [3]], [4,[[5, 6, [[7, 8]]]]], 9, [[10]]]];
var satu11 = soal5[0];
var dua22 = soal5[1][0][0];
var tiga33 = soal5[1][0][1][0];
var empat44 = soal5[1][1][0];
var lima55 = soal5[1][1][1][0][0];
var enam66 = soal5[1][1][1][0][1];
var tujuh77 = soal5[1][1][1][0][2][0][0];
var delapan88 = soal5[1][1][1][0][2][0][1];
var sembilan99 = soal5[1][2];
var sepuluh100 = soal5[1][3][0][0];
    console.log(satu11,dua22,tiga33,empat44,lima55,enam66,tujuh77,delapan88,sembilan99,sepuluh100);
// console.console.log([1, [[2, [3]], [4,[[5, 6, [[7, 8]]]]], 9, [[10]]] );