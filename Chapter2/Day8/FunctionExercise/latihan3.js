function waktu(nomor) {
  var jam = Math.floor (nomor/60);
  var menit = nomor % 60;

      if(menit < 10){
        menit = '0' + menit
      }

  return jam + ':' + menit
}
console.log(waktu(90));