function decode(number,  n) {
    var arr = n.toString() //ubah n ke string
    var arr2 = arr.split('') //pisah n menggunakan split
    var arr3 = arr2.map(Number) //mengubah string ke number

        var temp=[]; //var tampung
            for (var x = 0 , y = 0 ; x < number.length ; x++){    
            temp.push(number[x]-arr3[y])
            y++
        }
    
    var finish = temp.map (v => String.fromCharCode(v+96))
    var join = finish.join('');

return join   
}
console.log(decode([ 20, 12, 18, 30, 21],19391)); //"scout"
console.log(decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],19391939193));//"masterpiece"
console.log(decode([ 2, 16, 10, 11, 6, '', 5,],1234513));//"angga b"


// a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 24 25 26 27