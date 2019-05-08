function groupAnimals(animals) {
    animals.sort()
    var temp = [];
    var temp1 = [];
    var temp2 = [];
    var temp3 = [];

    var bigArray = [temp,temp1,temp2,temp3];

    for ( i = 0; i  < animals.length ; i ++){
      // console.log(animals[i][0]);

      if (animals[i][0] === ['a'][0]) {
          temp.push(animals[i])
      } else if (animals[i][0] === ['c'][0]){
          temp1.push(animals[i])
      } else if (animals[i][0] === ['k'][0]){
          temp2.push(animals[i])
      } else if (animals[i][0] === ['u'][0]){
            temp3.push(animals[i])
          }
          
  }

return bigArray
}


//SORT mengurutkan huruf awal
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['anoa', 'ayam'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
  // [ ['anjing', 'anoa', 'ayam'], ['cacing', 'cicak'], ['kuda','kancil'], ['unggas', unta'] ]