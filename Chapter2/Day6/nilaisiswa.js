// STORE Nilai(n) without value
// IF (n) < 101
// 	IF (n) > 80 AND < 101
// 		DISPLAY 'LULUS'

// 	ELSE IF (n) < 60 AND > 0
// 		DISPLAY 'REMEDIAL'

// 	ELSE IF (n) < 80 AND > 65
// 		DISPLAY 'LULUS BERSYARAT'

// 	ELSE
// 		DISPLAY none;

var nilai = 100;

if(nilai <=100){
    if(nilai <=60 && nilai >=0){
        console.log('kamu remedial');
    } else if (nilai >=80 && nilai <=100){
        console.log('selamat kamu lulus');
    } else if (nilai <80 && nilai >=65){
        console.log('kamu lulus bersyarat');
    } else if (nilai >60 && nilai <65){
        console.log('nilai diambang remedial');
    } else
        console.log('korupsi nilai');
}