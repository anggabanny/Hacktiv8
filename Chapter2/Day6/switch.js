var angka1 = 3 ;
    angka2 = 2 ;
var operator = '%';

switch (operator) {
//PENJUMLAHAN 
  case '+': { 
    (angka1 + angka2); {
      if((angka1 + angka2) % 2 == 0){
        console.log((angka1 + angka2)+' bilangan genap');
      } else 
        console.log((angka1 + angka2)+' bilangan ganjil');
    }
  } break;
// PENGURANGAN
  case '-': { 
    (angka1 - angka2); {
      if((angka1 - angka2) % 2 == 0){
        console.log((angka1 - angka2)+' bilangan genap');
      } else 
        console.log((angka1 - angka2)+' bilangan ganjil');
    }
  } break;
// PERKALIAN
  case '*': { 
    (angka1 * angka2); {
      if((angka1 * angka2) % 2 == 0){
        console.log((angka1 * angka2)+' bilangan genap');
      } else 
        console.log((angka1 * angka2)+' bilangan ganjil');
  }
} break;
// PEMBAGIAN
  case '/': { 
    (angka1 / angka2); {
      if((angka1 / angka2) % 2 == 0){
        console.log((angka1 / angka2)+' bilangan genap');
      } else 
        console.log((angka1 / angka2)+' bilangan ganjil');
  }
} break;
// SISA BAGI
  case '%': { 
    (angka1 % angka2); {
      if((angka1 % angka2) == 0){
        console.log((angka1 % angka2)+' bilangan genap');
      } else 
        console.log((angka1 % angka2)+' bilangan ganjil');
  }
} break;
  default: {
    console.log('operator yang dimasukkan salah');
  }
    break;
}