// STORE "merge" max number = 4
// (STOREspd) speed number 20
// ADD ="number" merge to max number
// IF number = 2
//  	DO DISPLAY (STOREspd) - 5 = X
// else IF number = 3
// 	DO DISPLAY (STOREspd) - 7 = X
// FALSE
// 	DO DISPLAY (STOREspd) - 2 = X

// (X) = DISPLAY NUMBER 

var  speed = 20;
     passenger = -1; 

if (passenger > 2 && passenger < 4) {
    console.log(speed - 5 + "km");
} else if (passenger == 4){
    console.log(speed - 7 + "km");
} else if (passenger >=1 && passenger <=2 ) {
    console.log(speed - 2 + "km");
} else if (passenger == 0) {
    console.log(speed + "km");
} else
    console.log('yang anda masukkan tidak sesuai oleh soal');