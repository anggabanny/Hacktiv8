/* 1
  akses tiap nilai di dalam array ini
  1. [[[[[[[1, 2, 3, 4, 5]]]]]]]
  2. [[1], [2, 3], [4, [5, 6]]]
  3. [1, [2, [3, [4, [5]]]]]
  4. [[[1, [2], 3, [4], [[[[5]]]]]]]
  5. [1, [[2, [3]], [4,[[5, 6, [[7, 8]]]]], 9, [[10]]]
*/

/* 2
  Diberikan sebuah array dengan kumpulan angka didalamnya, ubah array menjadi array 2 dimensi
  dimana berisikan pengelompokan angka dengan urutan genap, ganjil dan habis dibagi 3:

  function mengelompokkanAngka(array)
  ex.
    array = [2, 4, 6], maka akan di kelompokan menjadi 3:
    [2, 4] => genap
    [] => ganjil
    [6] => angka yang habis dibagi 3
    dan hasilnya: [ [2, 4], [], [6] ]


  TEST CASES:
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
*/




/* 3
  Diberikan sekumpulan string dengan nama binatang dalam array, kelompokan string tersebut berdasarkan huruf awalnya dan urutkan
  
  function groupAnimals(array)
  ex.
    array = [cacing, anoa, ayam] hasil pengelompokannya [['ayam', 'anoa'], ['cacing]]

  TEST CASES:
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
*/