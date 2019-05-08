function cek(isi) {
  var a = isi.match(/X/gi);
  console.log(isi);
  var b = isi.match(/O/gi);
  if (a.length == b.length){
      return true;
  } else
      return false;
}
console.log(cek('XOXOXO'));
console.log(cek('XOX'));
console.log(cek('XOOX'));
console.log(cek('XOXXO'));